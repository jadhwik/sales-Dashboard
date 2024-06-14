import user from "../assets/user.png";
import {
  Flex,
  Button,
  ButtonGroup,
  Tab,
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
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
} from "@chakra-ui/react";
import EditView from "./EditView";
import SalesOrder from "./SaleOrder";

const TableMain = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const date = new Date();
  console.log(date);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();
  // const seconds = date.getSeconds();

  // Determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Format time with leading zeros
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  // const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  const finalTime = `${hours}.${formattedMinutes}${ampm}`;

  const finalDate = `${day}/${month}/${year}`;
  const formattedDate = `${finalDate}(${finalTime})`;

  console.log(formattedDate);

  return (
    <VStack>
      <TableContainer width="900px" height="auto">
        <Table
          size="sm"
          variant="simple"
          borderWidth="2px"
          borderColor="green"
          p="5px"
        >
          <Thead>
            <Tr borderBottom="2px" borderBottomColor="green">
              <Th
                p="20px"
                borderRight="2px"
                borderRightColor="green"
                textAlign="center"
              >
                ID
              </Th>
              <Th
                p="20px"
                textAlign="center"
                borderRight="2px"
                borderRightColor="green"
              >
                Customer Name
              </Th>

              <Th
                p="20px"
                borderRight="2px"
                borderRightColor="green"
                textAlign="center"
              >
                Price(₹)
              </Th>
              <Th borderRight="2px" borderRightColor="green" textAlign="center">
                Last Modified
              </Th>
              <Th borderRight="2px" borderRightColor="green" textAlign="center">
                Edit/View
              </Th>
            </Tr>
          </Thead>

          <Tbody background="white">
            <Tr color="black">
              <Td py="20px" textAlign="center">
                1
              </Td>
              <Td textAlign="center">
                <Flex alignItems="center">
                  <Image src={user} boxSize="20px" mr="2"></Image>
                  Spider
                </Flex>
              </Td>
              <Td textAlign="center">₹2000</Td>
              <Td textAlign="center">{formattedDate}</Td>
              <Td textAlign="center">
                <Button color="black" onClick={onOpen}>
                  ...
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px)"
                  />
                  <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <EditView></EditView>
                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} mt onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Td>
            </Tr>
            <Tr color="black">
              <Td py="20px" textAlign="center">
                2
              </Td>
              <Td textAlign="center">
                <Flex alignItems="center">
                  <Image src={user} boxSize="20px" mr="2"></Image>
                  Spider
                </Flex>
              </Td>
              <Td textAlign="center">₹100</Td>
              <Td textAlign="center">11/03/2002(11.45pm)</Td>
              <Td textAlign="center">...</Td>
            </Tr>
            <Tr color="black">
              <Td py="20px" textAlign="center">
                3
              </Td>
              <Td textAlign="center">
                <Flex alignItems="center">
                  <Image src={user} boxSize="20px" mr="2"></Image>
                  Spider
                </Flex>
              </Td>
              <Td textAlign="center">₹500</Td>
              <Td textAlign="center">11/03/2002(11.45pm)</Td>
              <Td textAlign="center">...</Td>
            </Tr>
          </Tbody>

          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditView></EditView>
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

export default TableMain;
