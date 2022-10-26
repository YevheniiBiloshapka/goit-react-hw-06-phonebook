import { List, ListItem, Button, Results, Error } from './ContactList.styled';
import { VscTrash } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-slise';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const visualContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return Object.keys(contacts).length === 0 ? (
    <Error>❌ Your query did not find anything</Error>
  ) : (
    <>
      <Results>Contact list:</Results>
      <List>
        {visualContacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <Button onClick={() => dispatch(deleteContact(id))}>
              <VscTrash />
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};
