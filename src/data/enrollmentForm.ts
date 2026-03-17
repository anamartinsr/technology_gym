export type EnrollmentInputName =
  | "fullName"
  | "cpf"
  | "dob"
  | "phone"
  | "email";
export type EnrollmentConsentName = "terms" | "privacy";

export interface EnrollmentInputField {
  id: EnrollmentInputName;
  name: EnrollmentInputName;
  label: string;
  type?: "text" | "email" | "date";
  placeholder?: string;
  maxLength?: number;
}

export interface EnrollmentConsentField {
  id: EnrollmentConsentName;
  name: EnrollmentConsentName;
  label: string;
}

export const enrollmentPrimaryField = {
  id: "fullName",
  name: "fullName",
  label: "Nome Completo",
} as const satisfies EnrollmentInputField;

export const enrollmentFieldRows = [
  [
    {
      id: "cpf",
      name: "cpf",
      label: "CPF",
      placeholder: "000.000.000-00",
      maxLength: 14,
    },
    {
      id: "dob",
      name: "dob",
      label: "Data de Nascimento",
      type: "date",
    },
  ],
  [
    {
      id: "phone",
      name: "phone",
      label: "Telefone",
      placeholder: "(00) 00000-0000",
      maxLength: 15,
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      maxLength: 100,
    },
  ],
] as const satisfies readonly (readonly EnrollmentInputField[])[];

export const enrollmentConsentFields = [
  { id: "terms", name: "terms", label: "Aceito os termos" },
  { id: "privacy", name: "privacy", label: "Aceito a política" },
] as const satisfies readonly EnrollmentConsentField[];
