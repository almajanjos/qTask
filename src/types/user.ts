import { AddessDTO } from "./address";

type UserDTO = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddessDTO;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type { UserDTO };
