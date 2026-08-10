export const CHATS_CONTROLLER: string = "/chats";

export const CHATS_ROUTES = {
  GET_MY: "/me",
  UPDATE: "/by-id/:id",
  DELETE: "/by-id/:id",
  ADD_MEMBER: "/by-id/:id/add-member/:userId",
  REMOVE_MEMBER: "/chats/by-id/:id/remove-member/:userId",
  LEAVE: "/chats/by-id/:id/leave",
  GRANT: "/chats/by-id/:id/grant/:userId/:role",
  REVOKE: "/chats/by-id/:id/revoke/:userId",
} as const;
