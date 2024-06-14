import { useForm, Controller } from "react-hook-form";
import {
  Input,
  Box,
  Checkbox,
  CheckboxGroup,
  Button,
  Heading,
  Spacer,
  VStack,
  Text,
} from "@chakra-ui/react";
import Select from "react-select";
import { useState } from "react";

const SaleOrder = () => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [salesDetails, setsalesDetails] = useState([]);
  const [items, setItems] = useState([]);
  const [paid, setPaid] = useState(null);

  const itemsOptions = [
    { value: "item1", label: "Item 1" },
    { value: "item2", label: "Item 2" },
    { value: "item3", label: "Item 3" },
  ];

  const handleSelectChange = (selectedOptions) => {
    setItems(selectedOptions || []);
    setValue("items", selectedOptions);
  };

  const onSubmit = (data) => {
    setsalesDetails(data);
  };

  console.log(salesDetails);

  const handleCheckboxChange = (value) => {
    setPaid(value);
    setValue("paid", value);
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      color="white"
      backgroundColor="transparent"
      width="400px"
      p="20px"
    >
      <VStack spacing={6}>
        <Input
          color="black"
          placeholder="Customer_Id"
          type="number"
          {...register("customer_id", { required: "Customer_Id is required" })}
        />
        <Text color="red">{errors?.customer_id?.message}</Text>
        <Controller
          control={control}
          name="items"
          render={({ field }) => (
            <Select
              {...field}
              placeholder="Select Items"
              options={itemsOptions}
              background="transparent"
              isMulti
              onChange={(selected) => {
                field.onChange(selected);
                handleSelectChange(selected);
              }}
              styles={{
                container: (base) => ({
                  ...base,
                  width: "100%",
                  background: "transparent", // Increase the width to 100%
                }),
                control: (base) => ({
                  ...base,
                  minWidth: "300px",
                  background: "transparent", // Set a minimum width
                }),
              }}
            />
          )}
        />
        {items.map((item, index) => (
          <Box key={index} mt={4}>
            <Input
              color="black"
              placeholder="SKU_Id"
              type="number"
              background="transparent"
              {...register(`items[${index}].sku_id`, {
                required: "SKU_id is required",
              })}
            />
            <Text color="red">
              {errors?.items && errors.items[0]?.sku_id?.message}
            </Text>
            <Input
              color="black"
              placeholder="Price"
              type="number"
              {...register(`items[${index}].price`, {
                required: "Price is required",
              })}
            />
            <Text color="red">
              {errors?.items && errors.items[0].price?.message}
            </Text>
            <Input
              color="black"
              placeholder="Quantity"
              type="number"
              {...register(`items[${index}].quantity`, {
                required: "Quantity is required",
              })}
            />
            <Text color="red">
              {errors?.items && errors.items[0].quantity?.message}
            </Text>
          </Box>
        ))}
        <Box mt={4} color="black">
          <Checkbox
            isChecked={paid === "Yes"}
            onChange={() => handleCheckboxChange("Yes")}
            colorScheme="green"
          >
            Yes
          </Checkbox>
          <Checkbox
            isChecked={paid === "No"}
            onChange={() => handleCheckboxChange("No")}
            colorScheme="red"
          >
            No
          </Checkbox>
        </Box>
        <Input
          color="black"
          placeholder="Invoice No"
          {...register("invoice_no", { required: "Invoice is required" })}
        />
        <Text color="red">{errors?.invoice_no?.message}</Text>
        <Input
          color="black"
          placeholder="Invoice Date"
          type="date"
          {...register("invoice_date", {
            required: "Invoice date is required",
          })}
        />
        <Text color="red">{errors?.invoice_date?.message}</Text>
        <Button type="submit" mt={4}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default SaleOrder;
