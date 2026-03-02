import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  enrollmentSchema,
  type EnrollmentFormData,
} from "../../schemas/enrollmentSchema";

import InputField from "./InputField";
import CheckboxField from "./CheckboxField";
import SelectField from "./SelectField";
import Button from "../ui/Button";
import { plans } from "../../data/plans";

export default function EnrollmentForm() {
  const navigate = useNavigate();

  const planOptions = plans.map((plan) => ({
    value: plan.id,
    label: `${plan.title} - ${plan.price}`,
  }));

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      fullName: "",
      cpf: "",
      dob: "",
      phone: "",
      email: "",
      plan: "",
      terms: false,
      privacy: false,
    },
  });

  const onSubmit = (data: EnrollmentFormData) => {
    try {
      console.log(data);
      toast.success("Matrícula confirmada com sucesso!");

      setTimeout(() => {
        navigate("/confirmation");
      }, 1500);
    } catch {
      toast.error("Erro ao confirmar matrícula. Tente novamente.");
    }
  };

  const formatName = (value: string) => {
    return value.replace(/[0-9]/g, "");
  };

  const formatCPF = (value: string) => {
    const cleanValue = value.replace(/\D/g, "");

    let maskedValue = "";
    if (cleanValue.length > 9) {
      maskedValue = cleanValue.replace(
        /(\d{3})(\d{3})(\d{3})(\d{0,2})/,
        "$1.$2.$3-$4",
      );
    } else if (cleanValue.length > 6) {
      maskedValue = cleanValue.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
    } else if (cleanValue.length > 3) {
      maskedValue = cleanValue.replace(/(\d{3})(\d{0,3})/, "$1.$2");
    } else {
      maskedValue = cleanValue;
    }

    return maskedValue;
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2")
      .slice(0, 15);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white px-10 lg:px-45 py-10 grid gap-4"
    >
      <h2 className="text-xl font-bold text-(--secondary-color)">
        Preencha seus dados
      </h2>

      <InputField
        label="Nome Completo"
        id="fullName"
        value={watch("fullName") || ""}
        onChange={(e) =>
          setValue("fullName", formatName(e.target.value), {
            shouldValidate: true,
          })
        }
        error={errors.fullName}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InputField
          label="CPF"
          id="cpf"
          placeholder="000.000.000-00"
          maxLength={14}
          value={watch("cpf") || ""}
          onChange={(e) =>
            setValue("cpf", formatCPF(e.target.value), {
              shouldValidate: true,
            })
          }
          error={errors.cpf}
        />

        <InputField
          label="Data de Nascimento"
          id="dob"
          type="date"
          {...register("dob")}
          error={errors.dob}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InputField
          label="Telefone"
          id="phone"
          placeholder="(00) 00000-0000"
          value={watch("phone") || ""}
          onChange={(e) =>
            setValue("phone", formatPhone(e.target.value), {
              shouldValidate: true,
            })
          }
          error={errors.phone}
        />

        <InputField
          label="Email"
          id="email"
          type="email"
          maxLength={100}
          {...register("email")}
          error={errors.email}
        />
      </div>

      <SelectField
        label="Confirme seu plano"
        id="plan"
        options={planOptions}
        {...register("plan")}
        error={errors.plan}
      />

      <fieldset className="space-y-2">
        <legend className="sr-only">Consentimentos</legend>

        <CheckboxField
          label="Aceito os termos"
          id="terms"
          {...register("terms")}
          error={errors.terms}
        />

        <CheckboxField
          label="Aceito a política"
          id="privacy"
          {...register("privacy")}
          error={errors.privacy}
        />
      </fieldset>

      <div className="flex justify-center mt-4">
        <Button variant="enrollment" text="Confirmar Matrícula" />
      </div>
    </form>
  );
}
