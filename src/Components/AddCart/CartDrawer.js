import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Image,
  Box,
  HStack,
  Flex
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const user = useSelector((state) => state.ShoppingCartSlices.addToCart);

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Add to cart {user.length}
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'
      >
        <DrawerOverlay />
        <DrawerContent>
          
          <DrawerBody
            height='400px'
            overflowY={user.length > 3 ? 'scroll' : 'initial'}
          >
            <Flex align='center' justify='space-between' mt={"8"} mr={"-3"}>
              <Box>My Carts ({user.length})</Box>
              <HStack>
                <Button>Close</Button>
                <Button>Clear Carts</Button>
              </HStack>
            </Flex>
            {user.map((addcart) =>
              addcart.map((item) => (
                <Box key={item.id} py={2} borderBottom='1px solid #ddd'>
                  <DrawerHeader>{item.title}</DrawerHeader>
                  <DrawerBody>
                    <Image src={item.img} alt={item.title} objectFit='cover' height='200px' />
                  </DrawerBody>
                </Box>
              ))
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
