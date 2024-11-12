import { Clients } from '@/types/Clients';

export const mockClients = (): Promise<Clients> => {
  return new Promise((resolve) => {
    resolve([
      {
        id: '1',
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '123.123.123-12',
        phone: '(11) 12345-1234',
        status: 'Ativo'
      },
      {
        id: '2',
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '123.123.123-12',
        phone: '(11) 12345-1234',
        status: 'Inativo'
      },
      {
        id: '3',
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '123.123.123-12',
        phone: '(11) 12345-1234',
        status: 'Aguardando ativação'
      },
      {
        id: '4',
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '123.123.123-12',
        phone: '(11) 12345-1234',
        status: 'Desativado'
      }
    ]);
  });
};
