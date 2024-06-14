import React from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  Box,
  Button,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const RegisterPage = () => {
  const { authRegister } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define color values based on the current theme
  const inputTextColor = useColorModeValue("black", "white");
  const linkTextColor = useColorModeValue("green.500", "green.200");
  const errorTextColor = useColorModeValue("red.500", "red.300");
  const buttonColorScheme = useColorModeValue("red", "red");

  const onSubmit = (data) => {
    const { username, password } = data;
    authRegister(username, password);
    navigate("/customer-details");
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      backgroundColor={useColorModeValue("white", "gray.800")}
      width="400px"
      p="20px"
      mt="50px"
      mx="auto"
      borderRadius="md"
      boxShadow="md"
    >
      <VStack spacing={4}>
        <Input
          color={inputTextColor} // Apply text color to the Input component
          placeholder="Username"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <Text color={errorTextColor}>{errors.username.message}</Text>
        )}
        <Input
          color={inputTextColor} // Apply text color to the Input component
          placeholder="Password"
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <Text color={errorTextColor}>{errors.password.message}</Text>
        )}
        <Button type="submit" mt={4} colorScheme={buttonColorScheme}>
          Register
        </Button>
      </VStack>
    </Box>
  );
};

export default RegisterPage;
