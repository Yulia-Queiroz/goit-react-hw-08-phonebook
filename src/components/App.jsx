import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { ContainerStyled, MainTitle, Title } from './MainStyles';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getLoading } from 'redux/contactsSlice';
import { ThreeDots } from 'react-loader-spinner';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerStyled>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title> <Filter />
      {loading && (
        <ThreeDots
          height="30"
          width="30"
          color="#000"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {!error ? <ContactList /> : <div>Couldn't find contacts</div>}
    </ContainerStyled>
  );
};

export default App;
