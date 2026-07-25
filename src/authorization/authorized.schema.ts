import z from "zod";

export const AuthorizedSchema = z.object({
  accessToken: z.string("Токен має бути рядком")
});

export type AuthorizedPayload = z.infer<typeof AuthorizedSchema>;
