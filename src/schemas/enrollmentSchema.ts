import { z } from "zod";

const noEmojiRegex = /^[^\p{Extended_Pictographic}]*$/u;
const onlyLettersRegex = /^[A-Za-zÀ-ÿ\s]+$/;

export const enrollmentSchema = z.object({
  fullName: z
    .string()
    .min(10, "Nome deve ter no mínimo 10 caracteres")
    .max(100, "Nome muito longo")
    .regex(onlyLettersRegex, "Nome não pode conter números")
    .regex(noEmojiRegex, "Caracteres inválidos"),

  cpf: z
    .string()
    .min(14, "CPF inválido")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Formato de CPF inválido")
    .regex(noEmojiRegex, "Caracteres inválidos"),

  dob: z
    .string()
    .min(1, "Informe a data")
    .refine((date) => new Date(date) <= new Date(), "Data não pode ser futura"),

  phone: z
    .string()
    .min(14, "Telefone inválido")
    .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Formato de telefone inválido")
    .regex(noEmojiRegex, "Caracteres inválidos"),

  email: z
    .string()
    .email("Email inválido")
    .max(100)
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
