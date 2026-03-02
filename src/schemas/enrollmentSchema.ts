import { z } from "zod";
import { validateCPF } from "../utils/validateCPF";

const noEmojiRegex = /^[^\p{Extended_Pictographic}]*$/u;
const onlyLettersRegex = /^[A-Za-zÀ-ÿ\s\-']+$/u;

export const enrollmentSchema = z.object({
  fullName: z
    .string()
    .min(10, "Nome deve ter no mínimo 10 caracteres")
    .regex(onlyLettersRegex, "Nome não pode conter números")
    .regex(noEmojiRegex, "Caracteres inválidos"),

  cpf: z
    .string()
    .min(1, "Informe o CPF válido")
    .max(14, "CPF deve ter no máximo 14 caracteres")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Informe o CPF válido")
    .regex(noEmojiRegex, "Caracteres inválidos")
    .refine(validateCPF, "CPF inválido"),

  dob: z
    .string()
    .min(1, "Informe a data")
    .refine((date) => new Date(date) <= new Date(), "Data não pode ser futura"),

  phone: z
    .string()
    .min(1, "Informe um telefone válido")
    .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Informe um telefone válido")
    .regex(noEmojiRegex, "Caracteres inválidos"),

  email: z
    .string()
    .min(1, "Informe o email")
    .email("Email inválido")
    .max(100, "Email muito longo")
    .regex(noEmojiRegex, "Caracteres inválidos"),

  plan: z.string().min(1, "Selecione um plano"),

  terms: z.boolean().refine((v) => v === true, {
    message: "Aceite os termos",
  }),

  privacy: z.boolean().refine((v) => v === true, {
    message: "Aceite a política",
  }),
});

export type EnrollmentFormData = z.infer<typeof enrollmentSchema>;
