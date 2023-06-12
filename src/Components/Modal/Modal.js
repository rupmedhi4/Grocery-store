import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import { useSelector } from 'react-redux';
  


  const Modall=()=>{
    const user = useSelector(state => state.isLoginSlices.user);
    const addToCartBadge = useSelector(state => state.AllProductSlice.addToCart);


    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
      <Button onClick={onOpen}>Add Cart {addToCartBadge.length}</Button>


        <Modal isOpen={isOpen} onClose={onClose}  onOpen={onOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             <h4></h4>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Modall;