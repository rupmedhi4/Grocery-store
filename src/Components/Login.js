import React from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Box
      width="400px"
      padding="4"
      margin="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Heading as="h1" mb="8">
        Login
      </Heading>
      <FormControl id="email" mb="4">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" mb="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="teal" mb="4" width="100%">
        Sign In
      </Button>
      <Link href="#">Don't have an account? Sign Up</Link>
    </Box>
  );
};

export default Login;
