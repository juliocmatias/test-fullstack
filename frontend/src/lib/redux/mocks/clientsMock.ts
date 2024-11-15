import { StatusEnum } from '@/enums';
import { Client } from '@/types/Clients';

let clients: Client[] = [
  {
    id: crypto.randomUUID(),
    name: 'John Doe',
    email: 'john_doe@test.com',
    cpf: '12312312312',
    phone: '11123451234',
    status: StatusEnum.ACTIVE
  },
  {
    id: crypto.randomUUID(),
    name: 'Jane Doe',
    email: 'jane_doe@test.com',
    cpf: '12312312312',
    phone: '11123451234',
    status: StatusEnum.INACTIVE
  }
];

export const mockClients = (): Promise<Client[]> => {
  return new Promise((resolve) => {
    resolve(clients);
  });
};

export const addMockClient = (client: Client): Promise<Client> => {
  const id = crypto.randomUUID();
  return new Promise((resolve) => {
    clients = [...clients, { ...client, id }];
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
      clients = [
        ...clients.slice(0, index),
        { ...clients[index], ...client },
        ...clients.slice(index + 1)
      ];
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
