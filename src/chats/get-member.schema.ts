import z from "zod";
import { GetUserSchema } from "../users/get-user.schema.js";

export const GetMemberSchema = GetUserSchema.omit({ id: true }).extend({
  userId: z.number({
    message: "Унікальний ідентифікатор користувача має бути числом",
  }),
});
export type GetMemberPayload = z.infer<typeof GetMemberSchema>;
