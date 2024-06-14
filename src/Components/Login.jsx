// LoginPage.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Input,
  Button,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAuth } from "./AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const isAuthenticated = login(username, password);
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  // Define color values based on the current theme
  const inputTextColor = useColorModeValue("black", "white");
  const linkTextColor = useColorModeValue("green.500", "green.200");
  const errorTextColor = useColorModeValue("red.500", "red.300");
  const buttonColorScheme = useColorModeValue("red", "red");

  return (
    <Box
      width="400px"
      p="20px"
      mt="100px"
      mx="auto"
      backgroundColor={useColorModeValue("white", "gray.800")}
      borderRadius="md"
      boxShadow="md"
    >
      <VStack spacing={4}>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          color={inputTextColor}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          color={inputTextColor}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Text color={errorTextColor}>{error}</Text>}
        <Button colorScheme={buttonColorScheme} onClick={handleLogin}>
          Login
        </Button>
        <Text color={linkTextColor}>
          New user? <Link to="/register">Register here</Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default LoginPage;
