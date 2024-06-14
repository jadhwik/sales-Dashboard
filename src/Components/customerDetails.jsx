import React from "react";
import { useForm } from "react-hook-form";
import { Input, Box, Button, VStack, Text, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react"; // Import useColorModeValue hook

const CustomerProfileForm = () => {
  const inputTextColor = useColorModeValue("black", "white"); // Dynamic input text color
  const errorTextColor = useColorModeValue("red.500", "red.300"); // Dynamic error text color

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      color={inputTextColor}
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
          placeholder="ID"
          {...register("id", { required: "ID is required" })}
        />
        {errors.id && <Text color={errorTextColor}>{errors.id.message}</Text>}
        <Input
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <Text color={errorTextColor}>{errors.name.message}</Text>
        )}
        <Textarea
          placeholder="Color (comma-separated RGB values)"
          {...register("color", {
            required: "Color is required",
            pattern: {
              value: /^(\d{1,3},\s*){2}\d{1,3}$/,
              message: "Color must be 3 comma-separated RGB values",
            },
          })}
        />
        {errors.color && (
          <Text color={errorTextColor}>{errors.color.message}</Text>
        )}
        <Input
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <Text color={errorTextColor}>{errors.email.message}</Text>
        )}
        <Input
          placeholder="Pincode"
          {...register("pincode", { required: "Pincode is required" })}
        />
        {errors.pincode && (
          <Text color={errorTextColor}>{errors.pincode.message}</Text>
        )}
        <Input
          placeholder="Location Name"
          {...register("location_name", {
            required: "Location Name is required",
          })}
        />
        {errors.location_name && (
          <Text color={errorTextColor}>{errors.location_name.message}</Text>
        )}
        <Input
          placeholder="Type"
          {...register("type", { required: "Type is required" })}
        />
        {errors.type && (
          <Text color={errorTextColor}>{errors.type.message}</Text>
        )}
        <Input placeholder="Profile Picture URL" {...register("profile_pic")} />
        <Input placeholder="GST" {...register("gst")} />
        <Button type="submit" mt={4}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default CustomerProfileForm;
