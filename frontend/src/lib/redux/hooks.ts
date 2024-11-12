import { useDispatch, useSelector, useStore } from 'react-redux';

import type { ClientsDispatch, ClientsStore, RootState } from './store';

export const useClientsDispatch = useDispatch.withTypes<ClientsDispatch>();
export const useClientsSelector = useSelector.withTypes<RootState>();
export const useClientsStore = useStore.withTypes<ClientsStore>();
