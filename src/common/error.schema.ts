import z from "zod";

export const ErrorSchema = z.object({
  statusCode: z.number({ message: "Статус код має бути числом" }),
  message: z.string({ message: "Повідомленя має бути рядком" })
}).loose();

export type ErrorPayload = z.infer<typeof ErrorSchema>;
