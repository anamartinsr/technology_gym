import InputField from "./InputField";
import CheckboxField from "./CheckboxField";
import SelectField from "./SelectField";
import Button from "../ui/Button";

export default function EnrollmentForm() {
  const plans = [
    { value: "basic", label: "Básico" },
    { value: "premium", label: "Premium" },
    { value: "advanced", label: "Avançado" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulário enviado!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white px-10 lg:px-45 py-10 grid gap-4"
    >
      <h2 className="text-xl font-bold text-(--secondary-color)">
        Preencha seus dados
      </h2>

      <InputField label="Nome Completo" id="fullName" required />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InputField
          label="CPF"
          id="cpf"
          required
          placeholder="000.000.000-00"
        />
        <InputField label="Data de Nascimento" id="dob" type="date" required />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InputField
          label="Telefone"
          id="phone"
          type="tel"
          required
          placeholder="(00) 00000-0000"
        />
        <InputField label="Email" id="email" type="email" required />
      </div>
      <SelectField
        label="Confirme seu plano"
        id="plan"
        options={plans}
        required
      />

      <fieldset className="space-y-2">
        <legend className="sr-only">Consentimentos</legend>
        <CheckboxField label="Aceito os termos de uso" id="terms" required />
        <CheckboxField
          label="Aceito a política de privacidade"
          id="privacy"
          required
        />
      </fieldset>

      <div className="flex justify-center mt-4">
        <Button variant="enrollment" text="Confirmar Matrícula" />
      </div>
    </form>
  );
}
