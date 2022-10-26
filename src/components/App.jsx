import { Box, Section, Results } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/contacts-selectors';

export default function App() {
  const contacts = useSelector(selectContacts);

  return (
    <Section>
      <Box>
        <h2>Contacts</h2>
        <Filter />

        {contacts.length === 0 ? (
          <Results>You don't have any contact 😓</Results>
        ) : (
          <ContactList contacts={contacts} />
        )}
      </Box>
      <Box>
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>
      <ToastContainer limit={1} />
    </Section>
  );
}
