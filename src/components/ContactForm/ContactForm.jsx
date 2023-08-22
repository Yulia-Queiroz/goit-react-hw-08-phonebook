import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import {
  FormContainer,
  Label,
  Span,
  Input,
  SubmitButton,
} from './ContactFormStyles';
import { getContacts } from 'redux/contactsSlice';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addName = evt => {
    return setName(evt.currentTarget.value);
  };

  const addNumber = evt => {
    return setNumber(evt.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isContactExists = contacts.some(contact => contact.name === name);

    if (isContactExists) {
      // Notify.warning(`${name} is already in contacts`);
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );

    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        <Span> Name</Span>

        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={addName}
          required
        />
      </Label>
      <Label>
        <Span> Number</Span>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={addNumber}
          required
        />
      </Label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;
