import {
  VStack,
  useColorModeValue,
  Box,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const EditView = () => {
  const inputTextColor = useColorModeValue("black", "white");
  const linkTextColor = useColorModeValue("green.500", "green.200");
  const errorTextColor = useColorModeValue("red.500", "red.300");
  const buttonColorScheme = useColorModeValue("red", "red");

  return (
    <VStack>
      <Box backgroundColor={useColorModeValue("white", "grey.800")}>
        <ButtonGroup>
          <Button>Edit</Button>
          <Button>View</Button>
          <Button>Delete</Button>
        </ButtonGroup>
      </Box>
    </VStack>
  );
};

export default EditView;
