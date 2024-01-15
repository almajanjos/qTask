import { UserDTO } from "./user";

type PostDTO = {
  userId: UserDTO["id"];
  id: number;
  title: string;
  body: string;
};

export type { PostDTO };
