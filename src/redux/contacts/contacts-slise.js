import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
const baseContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contact',
  initialState: { contacts: baseContacts },
  reducers: {
    addContact: (state, { payload }) => {
      if (
        state.contacts.some(
          contact =>
            contact.number.toLocaleLowerCase() ===
            payload.number.toLocaleLowerCase()
        )
      ) {
        toast.error(`${payload.name} is already in contact`, {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        });
      } else {
        state.contacts.push(payload);
      }
    },
    deleteContact: (state, { payload }) => {
      const contact = state.contacts.find(c => c.id === payload);
      toast.success(`${contact.name} removed from contacts `, {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
