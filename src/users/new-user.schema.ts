import z from "zod";

export const MIN_PASSWORD_LENGTH = 6;
export const MAX_PASSWORD_LENGTH = 100;

export const NewUserSchema = z.object({
  login: z
    .string({ message: "Логін має бути рядком" })
    .nonempty({ message: "Логін має бути" }),
  password: z
    .string({ message: "Пароль має бути рядком" })
    .min(MIN_PASSWORD_LENGTH, {
      message: `Мінімальна довжина пароля ${MIN_PASSWORD_LENGTH} символів`,
    })
    .max(MAX_PASSWORD_LENGTH, {
      message: `Максимальна довжина пароля ${MAX_PASSWORD_LENGTH} символів`,
    }),
  displayName: z.string({ message: "Видиме ім'я має бути рядком" }).optional(),
});

export type NewUserPayload = z.infer<typeof NewUserSchema>;
