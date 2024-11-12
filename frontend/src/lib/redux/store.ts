import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { clientsSlice } from './slices';

const rootReducer = combineSlices(clientsSlice);

export type RootState = ReturnType<typeof rootReducer>;

export const clientsStore = () => configureStore({ reducer: rootReducer });

export type ClientsStore = ReturnType<typeof clientsStore>;
export type ClientsDispatch = ClientsStore['dispatch'];
