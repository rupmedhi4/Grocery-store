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

const SignUpForm = () => {
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
        Sign Up
      </Heading>
      <FormControl id="text" mb="4">
        <FormLabel>Full Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="email" mb="4">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" mb="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="teal" mb="4" width="100%">
        Sign Up
      </Button>
      <Link href="#">Already have an account? Sign In</Link>
    </Box>
  );
};

export default SignUpForm;
