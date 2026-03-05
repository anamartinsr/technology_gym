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
    formState: { errors, isSubmitting },
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: EnrollmentFormData) => {
    try {
      toast.success("Matrícula confirmada com sucesso!");

      setTimeout(() => {
        navigate("/confirmation");
      }, 1200);
    } catch {
      toast.error("Erro ao confirmar matrícula.");
    }
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
        {...register("fullName")}
        error={errors.fullName}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InputField
          label="CPF"
          id="cpf"
          placeholder="000.000.000-00"
          maxLength={14}
          {...register("cpf")}
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
          {...register("phone")}
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
        <Button
          variant="enrollment"
          text={isSubmitting ? "Enviando..." : "Confirmar Matrícula"}
        />
      </div>
    </form>
  );
}
