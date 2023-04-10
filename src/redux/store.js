import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactSlice';
import { filterSlice } from '../redux/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,

    filter: filterSlice.reducer,
  },
});
