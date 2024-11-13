import {
  createClient,
  deleteClient,
  getClients,
  updateClient
} from '@/service';
import { Client } from '@/types/Clients';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  clients: Client[];
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  clients: [],
  loading: false,
  error: null
};

export const fetchClients = createAsyncThunk(
  'clients/fetchClients',
  async () => {
    const response = await getClients();
    return response;
  }
);

export const addClient = createAsyncThunk(
  'clients/addClient',
  async (client: Client) => {
    const response = await createClient(client);
    return response;
  }
);

export const editClient = createAsyncThunk(
  'clients/editClient',
  async ({ id, client }: { id: string; client: Partial<Client> }) => {
    const response = await updateClient(id, client);
    return response;
  }
);

export const removeClient = createAsyncThunk(
  'clients/removeClient',
  async (id: string) => {
    await deleteClient(id);
    return id;
  }
);

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.loading = false;
        state.clients = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(addClient.fulfilled, (state, action) => {
        state.clients.push(action.payload);
      })
      .addCase(editClient.fulfilled, (state, action) => {
        const index = state.clients.findIndex(
          (client) => action.payload && client.id === action.payload.id
        );
        if (index !== -1) {
          if (action.payload) {
            state.clients[index] = action.payload;
          }
        }
      })
      .addCase(removeClient.fulfilled, (state, action) => {
        state.clients = state.clients.filter(
          (client) => client.id !== action.payload
        );
      });
  },
  selectors: {
    selectClients: (state) => state.clients,
    selectLoading: (state) => state.loading,
    selectError: (state) => state.error
  }
});

export const { selectClients, selectLoading, selectError } =
  clientsSlice.selectors;
