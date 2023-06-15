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
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleGrid } from '@chakra-ui/react';
import { AddToCartHandler } from '../Redux/Slices/ShoppingCartSlices';

export default function AllCarts({ product, id }) {
  const productArray = useSelector((state) => state.ShoppingCartSlices.dummyArray);
  const dispatch = useDispatch();

  const addHandler = (id) => {
    const filteredArray = productArray.filter((item) => item.id === id);
    dispatch(AddToCartHandler({filteredArray,id}));
    
  };

  return (
    <SimpleGrid columns={3} spacing={8}>
      {productArray.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <Heading size='md'>{product.title}</Heading>
            <Image src={product.img} alt={product.title} />
          </CardHeader>

          <CardBody>
            <Text>{product.amount}</Text>
            <Text>{product.paragraph}</Text>
          </CardBody>
          <CardFooter justifyContent='center'>
            <Button>Order</Button>
            <Button onClick={() => addHandler(product.id)}>Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}