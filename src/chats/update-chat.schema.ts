import type z from "zod";
import { NewChatSchema } from "./new-chat.schema.js";

export const UpdateChatSchema = NewChatSchema.partial();

export type UpdateChatPayload = z.infer<typeof UpdateChatSchema>;
