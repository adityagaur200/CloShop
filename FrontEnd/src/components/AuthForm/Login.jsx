import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInput] = useState({
    Email: '',
    Password: '',
  });

  const handleLogin = async () => {
    const user = {
      email: inputs.Email,
      password: inputs.Password,
    };

    try {
      const response = await fetch('http://localhost:9090/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Assuming the backend returns some token or success response
        const data = await response.json();
        console.log('Login successful:', data);

        // Navigate to the profile page upon successful login
        navigate('/Profile');
      } else {
        console.error('Login failed');
        // Handle failed login, e.g., show an error message
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <Box border={'2px solid grey'} borderRadius={2} width={450}>
      <Stack direction={'column'} gap={1} m={2}>
        <Typography fontFamily={'cursive'} fontSize={30} align="center">
          CLOSHOP
        </Typography>
        <Typography fontSize={16} fontWeight={'bold'}>
          Email :
        </Typography>
        <TextField
          size="small"
          variant="outlined"
          type="email"
          placeholder="Email"
          value={inputs.Email}
          onChange={(e) => setInput({ ...inputs, Email: e.target.value })}
        />
        <Typography fontSize={16} fontWeight={'bold'}>
          Password :
        </Typography>
        <TextField
          variant="outlined"
          type="password"
          size="small"
          placeholder="Password"
          value={inputs.Password}
          onChange={(e) => setInput({ ...inputs, Password: e.target.value })}
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
        <Typography fontSize={13} align="center">
          New to CloShop?{' '}
          <Button variant="text" size="small" onClick={() => navigate('/sign_in')}>
            Sign in
          </Button>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Login;
