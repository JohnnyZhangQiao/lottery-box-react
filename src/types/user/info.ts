import { TBox } from '@/types/index/box';

export type TAccount = {
  token?: string;
  userId: string;
  username: string;
  avatar: string;
};

export type TUser = {
  token?: string;
  userId: string;
  username: string;
  avatar: string;
  box?: TBox[];
};
