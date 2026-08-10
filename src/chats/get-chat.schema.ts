import z from "zod";
import { NewChatSchema } from "./new-chat.schema.js";
import { GetMemberSchema } from "./get-member.schema.js";

export const GetChatSchema = NewChatSchema.extend({
  id: z.number({ message: "Унікальний ідентифікатор має бути рядком" }),
  members: GetMemberSchema.array().min(1, {
    message: "У чаті має бути хоча б 1 учасник",
  }),
});

export type GetChatPayload = z.infer<typeof GetChatSchema>;
