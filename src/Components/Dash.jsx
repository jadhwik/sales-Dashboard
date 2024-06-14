import {
  Button,
  ButtonGroup,
  Tab,
  Flex,
  Spacer,
  Box,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";

import { useState } from "react";
import { useAuth } from "./AuthContext";
import Table from "./Table";
import CustomerDetails from "./customerDetails";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import SaleOrder from "./SaleOrder";
import ProductForm from "./ProductDetails";

const Dash = () => {
  const [addNewOrder, setNewOrder] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleNewOrder = () => {
    setNewOrder(true);
  };

  const handleCreateNew = () => {
    setNewOrder(false); // Set to false to open Customer Details form
    onOpen();
  };

  const handleAddSalesOrder = () => {
    setNewOrder(true); // Set to true to open Product Details form
    onOpen();
  };

  return (
    <VStack spacing={6}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        m="50px"
        // gap="500px"
      >
        <Button onClick={logout}>Logout</Button>
        <Button onClick={handleCreateNew}>Create New</Button>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Flex>
      <Flex>
        <ButtonGroup spacing={5}>
          <Button>Active Sales orders</Button>
          <Button onClick={handleAddSalesOrder}>+ Sales orders</Button>
        </ButtonGroup>
      </Flex>
      <Table />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {addNewOrder ? <ProductForm /> : <CustomerDetails />}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default Dash;
