import React from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  IconButton,
  ChakraProvider,
  Link,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FcShop } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Navbar = () => {

  const loginHandler=async()=>{
    try{
         alert("done")
    }catch(err){
alert(err.message)
    }
  
   
  }
  return (
    <Flex
      as="nav"
      
      align="center"
      justify="space-between"
      padding={4}
      bg="blue.800"
      color="white"
    >
      <Box marginLeft={"6rem"}>
        
        <IconButton
          icon={<FcShop size={"2.5rem"} />}
          size="xl"
          backgroundColor="blue"
          aria-label="Shopping Logo"
          marginRight={2}
        />
         {/* Home Link */}
         <Link
          href="/"
          marginRight={4}
          style={{ textDecoration: "none" }}
          _hover={{
           color:"red",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",}}
        >

          Home
        </Link>


        <Link href="/shoppingcart" marginRight={4} style={{ textDecoration: "none" }}
          _hover={{
           color:"red",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",}}>
          Shop
        </Link>

     
        <Link href="/allProducts" marginRight={4} style={{ textDecoration: "none" }}
          _hover={{
           color:"red",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",}}>
         Featured
        </Link>
        <Link href="/contact" marginRight={4} style={{ textDecoration: "none" }}
          _hover={{
           color:"red",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",}}>
         Recommended
        </Link>
      </Box>

      <Flex align="center">

        {/* Search Input */}

        <Input
          variant="filled"
          bg="white"
          marginRight={2}
          _placeholder={{ color: "gray" }}
          _hover={{
            border: "1px solid #ccc",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          }}
          placeholder="Search"
        />
        <IconButton
          icon={<FcShop size={"2.5rem"} />}
          size="xl"
          backgroundColor="blue"
          aria-label="Shopping Logo"
          marginRight={"6rem"}
          
        />
        {/* Sign Up Button */}
        <Button colorScheme="teal" variant="outline" marginRight={2}>
          Sign Up
        </Button>

        {/* Login Button */}
        <Button colorScheme="teal" variant="solid" onClick={loginHandler}>
          Login
        </Button>
      </Flex>     
       <ColorModeSwitcher/>
    </Flex>


  );
};

export default Navbar;

