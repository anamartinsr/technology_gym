import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCallback, useEffect, useRef } from "react";

import {
  enrollmentSchema,
  type EnrollmentFormData,
} from "@/schemas/enrollmentSchema";

import { plans } from "@/data/plans";
import { formatCPF, formatName, formatPhone } from "@/utils/formatters";
import {
  enrollmentConsentFields,
  enrollmentFieldRows,
  enrollmentPrimaryField,
  type EnrollmentInputName,
} from "@/data/enrollmentForm";
import { UI_TEXT } from "@/constants/uiText";
import EnrollmentFormContent from "@/components/form/EnrollmentFormContent";
import {
  trackEnrollmentAbandonment,
  trackEnrollmentStageInteraction,
  trackEvent,
  type EnrollmentStage,
} from "@/utils/observability";

const FIELD_STAGE_MAP: Record<EnrollmentInputName, EnrollmentStage> = {
  fullName: "personal-data",
  cpf: "personal-data",
  dob: "personal-data",
  phone: "contact",
  email: "contact",
};

export default function EnrollmentForm() {
  const navigate = useNavigate();
  const touchedStagesRef = useRef<Set<EnrollmentStage>>(new Set());
  const lastTouchedStageRef = useRef<EnrollmentStage | null>(null);
  const submittedRef = useRef(false);
  const abandonmentTrackedRef = useRef(false);

  const markStageTouched = (stage: EnrollmentStage) => {
    touchedStagesRef.current.add(stage);
    lastTouchedStageRef.current = stage;
    trackEnrollmentStageInteraction(stage);
  };

  const trackAbandonment = useCallback(() => {
    if (abandonmentTrackedRef.current || submittedRef.current) {
      return;
    }

    const touchedStages = [...touchedStagesRef.current];
    const lastStage = lastTouchedStageRef.current;

    if (touchedStages.length === 0 || !lastStage) {
      return;
    }

    abandonmentTrackedRef.current = true;
    trackEnrollmentAbandonment(lastStage, touchedStages);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      trackAbandonment();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        trackAbandonment();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      trackAbandonment();
    };
  }, [trackAbandonment]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatName(e.target.value);
    markStageTouched("personal-data");
  };

  const handleNumericInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    formatter: (value: string) => string,
    stage: EnrollmentStage,
  ) => {
    e.target.value = formatter(e.target.value);
    markStageTouched(stage);
  };

  const preventNumericOnName = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/\d/.test(e.key)) {
      e.preventDefault();
    }
  };

  const preventLettersOnNumeric = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (/^[a-zA-Z]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const getRegisterByField = (name: EnrollmentInputName) => {
    if (name === "fullName") {
      return register(name, { onChange: handleNameChange });
    }

    if (name === "cpf") {
      return register(name, {
        onChange: (e) =>
          handleNumericInputChange(e, formatCPF, "personal-data"),
      });
    }

    if (name === "phone") {
      return register(name, {
        onChange: (e) => handleNumericInputChange(e, formatPhone, "contact"),
      });
    }

    return register(name, {
      onChange: () => markStageTouched(FIELD_STAGE_MAP[name]),
    });
  };

  const getOnKeyDownByField = (name: EnrollmentInputName) => {
    if (name === "fullName") return preventNumericOnName;
    if (name === "cpf" || name === "phone") return preventLettersOnNumeric;
    return undefined;
  };

  const planOptions = plans.map((plan) => ({
    value: plan.id,
    label: `${plan.title} - ${plan.price}`,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: EnrollmentFormData) => {
    void data;
    trackEvent("enrollment_submit_attempt", {
      touchedStages: [...touchedStagesRef.current],
      touchedCount: touchedStagesRef.current.size,
    });

    try {
      toast.success(UI_TEXT.enrollment.successToast);
      submittedRef.current = true;
      trackEvent("enrollment_submit_success");

      setTimeout(() => {
        navigate("/confirmation");
      }, 1200);
    } catch {
      toast.error(UI_TEXT.enrollment.errorToast);
      trackEvent("enrollment_submit_error");
    }
  };

  const onInvalidSubmit = () => {
    trackEvent("enrollment_submit_invalid", {
      touchedStages: [...touchedStagesRef.current],
      touchedCount: touchedStagesRef.current.size,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
      className="bg-white px-10 lg:px-45 py-10 grid gap-4"
    >
      <EnrollmentFormContent
        viewModel={{
          title: UI_TEXT.enrollment.title,
          primaryField: enrollmentPrimaryField,
          fieldRows: enrollmentFieldRows,
          consentFields: enrollmentConsentFields,
          planOptions,
          isSubmitting,
        }}
        bindings={{
          errors,
          registerField: getRegisterByField,
          registerPlan: register("plan", {
            onChange: () => markStageTouched("plan-selection"),
          }),
          registerConsent: (name) =>
            register(name, {
              onChange: () => markStageTouched("consent"),
            }),
          getFieldKeyDown: getOnKeyDownByField,
          getFieldFocus: (name) => () =>
            markStageTouched(FIELD_STAGE_MAP[name]),
        }}
      />
    </form>
  );
}
