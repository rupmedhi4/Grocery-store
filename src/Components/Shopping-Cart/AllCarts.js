import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Grid,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function FeatureCard({ product }) {
  const productArray = useSelector(state => state.ShoppingCartSlices.dummyArray);

  const addHandler = (id) => {
    const filteredArray = productArray.filter(item => item.id === id);

    console.log(filteredArray);
    // Perform the logic to add the product to the cart
  };

  return (
    <Box>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(6, 1fr)']}
        gap={6}
        p={4}
        mx="auto"
        maxW="1200px"
      >
        {productArray.map((product) => (
          <Box
            key={product.id}
            boxShadow="md"
            borderRadius="md"
            bg="blue.100"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={product.img} alt="Product" height="90px" objectFit="cover" />
            <Divider bg="red" />
            <Box p={4}>
              <Heading size="md" textAlign="center" color="black" mb={2}>
                {product.title}
              </Heading>
              <Text textAlign="center" color="purple.900">
                {product.paragraph}
              </Text>
              <Text textAlign="center" color="purple.900" mt={3}>
                {product.amount}
              </Text>
            </Box>
            <Flex justifyContent="center" p={4} ml={4} mr={6}>
              <ButtonGroup spacing={2}>
                <Button variant="solid" colorScheme="red" size="sm" p={1} ml={1.5}>
                  Buy now
                </Button>
                <Button
                  variant="solid"
                  colorScheme="red"
                  size="sm"
                  p={1}
                  onClick={() => addHandler(product.id)}
                >
                  Add to cart
                </Button>
              </ButtonGroup>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
