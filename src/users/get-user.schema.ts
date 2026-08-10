import z from "zod";
import { NewUserSchema } from "./new-user.schema.js";

export const GetUserSchema = NewUserSchema.omit({ password: true })
  .extend({
    id: z.number({ message: "Ідентифікатор має бути числом" }),
    role: z.string({ message: "Роль користувача має бути рядком" }),
  })
  .required();

export type GetUserPayload = z.infer<typeof GetUserSchema>;
