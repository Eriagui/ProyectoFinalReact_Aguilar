import { useContext } from "react";
import { CartContext } from "../../context";
import {
  Box,
  Image,
  Text,
  Button,
  Heading,
  Divider,
  VStack,
  HStack,
  Spacer,
  Alert,
  AlertIcon,
  IconButton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";
export const CartDetails = () => {
  const { cartState, addItem, removeItem, deleteItem } =
    useContext(CartContext);
  const total = cartState.reduce(
    (acc, item) => acc + item.price * item.qtyItem,
    0
  );

  const handleDeleteItem = (item) => {
    deleteItem(item);
  };

  return (
    <Box p={6} maxW="800px" mx="auto" mb="10">
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Your Cart:
      </Heading>

      {cartState.length === 0 ? (

        <Wrap justify="center">
          <WrapItem>
            <Alert status="info" borderRadius="md">
              <AlertIcon />
              Your cart is empty.
            </Alert>
          </WrapItem>

          <WrapItem>
            <Link to="/">
              <Button variant='solid' colorScheme='blue' ml={4}>
                Continue shopping
              </Button>
            </Link>
          </WrapItem>
        </Wrap>

      ) : (
        <VStack spacing={4} align="stretch" mb="20%">
          {cartState.map((item) => (
            <Wrap
              key={item.id}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              alignItems="center"
              boxShadow="sm"
              justify="center"
            >

              <WrapItem>
                <Image
                  src={item.image}
                  alt={item.title}
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="md"
                  mr={4}
                />
                <Box flex="1">
                  <Text fontSize="xl" fontWeight="bold">
                    {item.title}
                  </Text>
                  <HStack spacing={4} mt={2}>
                    <Text>Price: ${item.price.toFixed(2)}</Text>
                    <HStack>
                      <IconButton
                        aria-label="Disminuir cantidad"
                        icon={<MinusIcon />}
                        size="sm"
                        onClick={() => removeItem(item)}
                        isDisabled={item.qtyItem === 1}
                      />
                      <Text>{item.qtyItem}</Text>
                      <IconButton
                        aria-label="Aumentar cantidad"
                        icon={<AddIcon />}
                        size="sm"
                        onClick={() => addItem(item)}
                        isDisabled={item.qtyItem >= item.stock}
                      />
                    </HStack>
                  </HStack>
                </Box>
              </WrapItem>



              <Spacer />

              <WrapItem>
                <HStack>
                  <Text fontWeight="bold">
                    Subtotal: ${(item.price * item.qtyItem).toFixed(2)}
                  </Text>
                  <IconButton
                    aria-label="Delete Product"
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    variant="outline"
                    onClick={() => handleDeleteItem(item)}
                  />
                </HStack>
              </WrapItem>


            </Wrap>
          ))}
          <Divider />

          <Wrap justify="center">

            <WrapItem>
              <Text fontSize="2xl" fontWeight="bold">
                Total: ${total.toFixed(2)} USD
              </Text>
            </WrapItem>

            <Spacer />

            <WrapItem>
              <Link to="/">
                <Button variant='solid' colorScheme='blue' ml={4}>
                  Continue shopping
                </Button>
              </Link>
            </WrapItem>

            <WrapItem>
              <Link to="/payment">
                <Button variant='solid' colorScheme='blue' ml={4}>
                  Proceed to pay
                </Button>
              </Link>
            </WrapItem>

          </Wrap>
        </VStack>
      )}
    </Box>
  );
};
