type Status = 'Ativo' | 'Inativo' | 'Aguardando ativação' | 'Desativado';

export type Client = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: Status;
};
