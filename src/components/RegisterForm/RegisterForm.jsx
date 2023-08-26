import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { useState } from 'react';
import { ContainerStyled } from './RegisterFormStyled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [emptyFields, setEmptyFields] = useState({
    email: false,
    password: false,
    name: false,
  });

  const checkEmptyFields = (nameValue, emailValue, passwordValue) => {
    if (nameValue.trim() === '') {
      setEmptyFields(prevState => ({ ...prevState, name: true }));
    } else {
      setEmptyFields(prevState => ({ ...prevState, name: false }));
    }

    if (emailValue.trim() === '') {
      setEmptyFields(prevState => ({ ...prevState, email: true }));
    } else {
      setEmptyFields(prevState => ({ ...prevState, email: false }));
    }

    if (passwordValue.trim() === '') {
      setEmptyFields(prevState => ({ ...prevState, password: true }));
    } else {
      setEmptyFields(prevState => ({ ...prevState, password: false }));
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    const nameValue = form.elements.name.value;

    checkEmptyFields(nameValue, emailValue, passwordValue);

    if (
      emailValue.trim() === '' ||
      passwordValue.trim() === '' ||
      nameValue.trim() === ''
    ) {
      return;
    }

    dispatch(
      register({
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      })
    );
    form.reset();
  };
  return (
    <ContainerStyled>
      <Container component="div" maxWidth="xs">
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleFormSubmit} autoComplete="off">
            <TextField
              margin="normal"
              fullWidth
              label="Name"
              name="name"
              autoFocus
              helperText={emptyFields.name && 'This field is required.'}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              autoFocus
              helperText={emptyFields.email && 'This field is required.'}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              helperText={emptyFields.password && 'This field is required.'}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ContainerStyled>
  );
};

export default RegisterForm;
