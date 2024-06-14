// ProductForm.jsx
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Box,
  Input,
  Button,
  VStack,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { fetchProducts, updateProduct, addProduct } from "./Api";

const initialData = {
  name: "New Product",
  category: "The god of War",
  characteristics: "New Product Characteristics",
  features: "",
  brand: "New Product Brand",
  sku: [
    {
      id: 248,
      selling_price: 54,
      max_retail_price: 44,
      amount: 33,
      unit: "kg",
      quantity_in_inventory: 0,
    },
  ],
};

const ProductForm = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState(initialData);
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"], // Change the string to an array
    queryFn: fetchProducts,
  });

  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkuChange = (index, field, value) => {
    const updatedSkus = formData.sku.map((sku, i) =>
      i === index ? { ...sku, [field]: value } : sku
    );
    setFormData((prev) => ({
      ...prev,
      sku: updatedSkus,
    }));
  };

  const inputTextColor = useColorModeValue("black", "white");
  const linkTextColor = useColorModeValue("blue.500", "blue.200");
  const buttonColorScheme = useColorModeValue("blue", "blue");
  const boxBackgroundColor = useColorModeValue("white", "gray.800");

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <Box
      width="400px"
      p="20px"
      mt="20px"
      mx="auto"
      backgroundColor={boxBackgroundColor}
      borderRadius="md"
      boxShadow="md"
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            color={inputTextColor}
          />
          <Input
            placeholder="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            color={inputTextColor}
          />
          <Input
            placeholder="Characteristics"
            name="characteristics"
            value={formData.characteristics}
            onChange={handleChange}
            color={inputTextColor}
          />
          <Input
            placeholder="Brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            color={inputTextColor}
          />
          <Text color={inputTextColor}>SKUs</Text>
          {formData.sku.map((sku, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" p="10px">
              <HStack spacing={2}>
                <Input
                  placeholder="Selling Price"
                  type="number"
                  value={sku.selling_price}
                  onChange={(e) =>
                    handleSkuChange(index, "selling_price", e.target.value)
                  }
                  color={inputTextColor}
                />
                <Input
                  placeholder="Max Retail Price"
                  type="number"
                  value={sku.max_retail_price}
                  onChange={(e) =>
                    handleSkuChange(index, "max_retail_price", e.target.value)
                  }
                  color={inputTextColor}
                />
                <Input
                  placeholder="Amount"
                  type="number"
                  value={sku.amount}
                  onChange={(e) =>
                    handleSkuChange(index, "amount", e.target.value)
                  }
                  color={inputTextColor}
                />
                <Input
                  placeholder="Unit"
                  value={sku.unit}
                  onChange={(e) =>
                    handleSkuChange(index, "unit", e.target.value)
                  }
                  color={inputTextColor}
                />
                <Input
                  placeholder="Quantity in Inventory"
                  type="number"
                  value={sku.quantity_in_inventory}
                  onChange={(e) =>
                    handleSkuChange(
                      index,
                      "quantity_in_inventory",
                      e.target.value
                    )
                  }
                  color={inputTextColor}
                />
              </HStack>
            </Box>
          ))}
          <Button type="submit" colorScheme={buttonColorScheme}>
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ProductForm;
