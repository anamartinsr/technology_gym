import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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

export default function EnrollmentForm() {
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatName(e.target.value);
  };

  const handleNumericInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    formatter: (value: string) => string,
  ) => {
    e.target.value = formatter(e.target.value);
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
        onChange: (e) => handleNumericInputChange(e, formatCPF),
      });
    }

    if (name === "phone") {
      return register(name, {
        onChange: (e) => handleNumericInputChange(e, formatPhone),
      });
    }

    return register(name);
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

    try {
      toast.success(UI_TEXT.enrollment.successToast);

      setTimeout(() => {
        navigate("/confirmation");
      }, 1200);
    } catch {
      toast.error(UI_TEXT.enrollment.errorToast);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          registerPlan: register("plan"),
          registerConsent: (name) => register(name),
          getFieldKeyDown: getOnKeyDownByField,
        }}
      />
    </form>
  );
}
