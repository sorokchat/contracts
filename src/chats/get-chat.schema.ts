import z from "zod";
import { NewChatSchema } from "./new-chat.schema.js";

export const GetChatSchema = NewChatSchema.extend({
  id: z.number({ message: "Унікальний ідентифікатор має бути рядком" })
});

export type GetChatPayload = z.infer<typeof GetChatSchema>;
