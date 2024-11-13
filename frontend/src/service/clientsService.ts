import { Client } from '@/types/Clients';

import {
  mockClients,
  addMockClient,
  updateMockClient,
  deleteMockClient
} from '@/lib/redux/mocks';

import api from './api';

const useMock = process.env.USE_MOCK_CLIENTS === 'true';

export const getClients = async (): Promise<Client[]> => {
  if (useMock) {
    return mockClients();
  } else {
    const response = await api.get('/clients');
    return response.data;
  }
};

export const createClient = async (client: Client): Promise<Client> => {
  if (useMock) {
    return addMockClient(client);
  } else {
    const response = await api.post('/clients', client);
    return response.data;
  }
};

export const updateClient = async (
  id: string,
  client: Partial<Client>
): Promise<Client | null> => {
  if (useMock) {
    return updateMockClient(id, client);
  } else {
    const response = await api.put(`/clients/${id}`, client);
    return response.data;
  }
};

export const deleteClient = async (id: string): Promise<void> => {
  if (useMock) {
    return deleteMockClient(id);
  } else {
    await api.delete(`/clients/${id}`);
  }
};
