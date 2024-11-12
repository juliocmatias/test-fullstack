'use client';

import { useEffect } from 'react';

import {
  fetchClients,
  selectError,
  selectClients,
  selectLoading
} from '@/lib/redux';
import { useClientsDispatch, useClientsSelector } from '@/lib/redux/hooks';

export const useListClients = () => {
  const dispatch = useClientsDispatch();
  const clients = useClientsSelector(selectClients);
  const loading = useClientsSelector(selectLoading);
  const error = useClientsSelector(selectError);

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  return { clients, loading, error };
};
