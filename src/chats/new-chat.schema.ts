import z from "zod";

export const NewChatSchema = z.object({
  name: z.string({ message: "Імʼя має бути рядком" }),
  description: z.string({ message: "Опис має бути рядком" }).optional()
});

export type NewChatPayload = z.infer<typeof NewChatSchema>;
