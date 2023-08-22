import React from 'react';
import {
  ContactListStyled,
  ContactListItem,
  ContactName,
  DeleteButton,
} from './ContactListStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <ContactListStyled>
        {visibleContacts.map(contact => {
          return (
            <ContactListItem key={contact.id}>
              <span>
                <ContactName>{contact.name}</ContactName>: {contact.number}
              </span>
              <DeleteButton
                type="button"
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </DeleteButton>
            </ContactListItem>
          );
        })}
      </ContactListStyled>
    </>
  );
};

export default ContactList;
