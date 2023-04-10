import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsShelfAPI from '../redux/contactshelfAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsShelfAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (data, { rejectWithValue }) => {
    try {
      const response = await contactsShelfAPI.addContact(data);
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/addContacts',
  async (id, { rejectWithValue }) => {
    try {
      const response = await contactsShelfAPI.deleteContact(id);
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
