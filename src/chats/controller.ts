export const CHATS_CONTROLLER: string = "/chats";

export const CHATS_ROUTES = {
  CREATE: "",
  GET_MY: "/me",
  UPDATE: "/by-id/:id",
  DELETE: "/by-id/:id",
  ADD_MEMBER: "/by-id/:id/add-member/:userId",
  REMOVE_MEMBER: "/by-id/:id/remove-member/:userId",
  LEAVE: "/by-id/:id/leave",
  GRANT: "/by-id/:id/grant/:userId/:role",
  REVOKE: "/by-id/:id/revoke/:userId",
} as const;
