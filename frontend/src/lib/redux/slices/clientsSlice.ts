import { Client } from '@/types/Clients';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { mockClients } from '../mocks';

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
    const response = await mockClients();
    return response;
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
        state.clients = action.payload as Client[];
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
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
