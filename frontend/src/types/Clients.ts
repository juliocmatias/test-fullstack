import { StatusEnum } from '@/enums';

export type Status = (typeof StatusEnum)[keyof typeof StatusEnum];

export type Client = {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: Status;
};
