import { Client } from '@/types/Clients';

let clients: Client[] = [
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
    name: 'Jane Doe',
    email: 'jane_doe@test.com',
    cpf: '123.123.123-12',
    phone: '(11) 12345-1234',
    status: 'Inativo'
  }
];

export const mockClients = (): Promise<Client[]> => {
  return new Promise((resolve) => {
    resolve(clients);
  });
};

export const addMockClient = (client: Client): Promise<Client> => {
  return new Promise((resolve) => {
    clients = [...clients, client];
    resolve(client);
  });
};

export const updateMockClient = (
  id: string,
  client: Partial<Client>
): Promise<Client | null> => {
  return new Promise((resolve) => {
    const index = clients.findIndex((c) => c.id === id);
    if (index !== -1) {
      clients[index] = { ...clients[index], ...client };
      resolve(clients[index]);
    } else {
      resolve(null);
    }
  });
};

export const deleteMockClient = (id: string): Promise<void> => {
  return new Promise((resolve) => {
    clients = clients.filter((c) => c.id !== id);
    resolve();
  });
};
