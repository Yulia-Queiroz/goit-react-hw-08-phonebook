import { useState } from 'react';
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
import { logIn } from 'redux/auth/authOperations';
import { ContainerStyled } from './LoginFormStyled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [emptyFields, setEmptyFields] = useState({
    email: false,
    password: false,
  });

  const checkEmptyFields = (emailValue, passwordValue) => {
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

  const handleFormSubmit = async evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;

    checkEmptyFields(emailValue, passwordValue);

    if (emailValue.trim() === '' || passwordValue.trim() === '') {
      return;
    }
    dispatch(
      logIn({
        email: emailValue,
        password: passwordValue,
      })
    );

    form.reset();
  };

  return (
    <ContainerStyled>
      <Container component="div" maxWidth="xs" sx={{ margin: 'auto' }}>
        <Box
          sx={{
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleFormSubmit} autoComplete="off">
            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              type="email"
              name="email"
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
              sx={{ mt: 3, mb: 0 }}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Container>
    </ContainerStyled>
  );
};

export default LoginForm;
