import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        handlePending(state, action);
      })
      .addCase(addContact.pending, (state, action) => {
        handlePending(state, action);
      })
      .addCase(deleteContact.pending, (state, action) => {
        handlePending(state, action);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.unshift(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

export const getContacts = state => state.contacts.contacts.items;
export const getLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;
