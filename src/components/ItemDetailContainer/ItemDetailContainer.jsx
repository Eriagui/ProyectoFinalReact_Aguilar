import { useState, useContext } from "react";
import {
  Stack,
  Text,
  Image,
  Button,
  Heading,
  useColorModeValue,
  Card,
  CardFooter,
  CardBody,
  Divider,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const ItemDetailContainer = ({ product }) => {
  const [showCount, setShowCount] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [count, setCount] = useState(0);

  const { addItem, removeItem } = useContext(CartContext);

  const handleShowCount = () => {
    setShowCount(!showCount);
    setShowButton(!showButton);
    handleIncrement();
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    addItem(product, newCount);
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      removeItem(product);
    }
  };

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      mt="10"
      mb="30%"
    >
      <Image
        objectFit='scale-down'
        maxW={{ base: '100%', sm: '30%' }}
        src={product.image}
        alt={product.title}
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{product.title}</Heading>

          <Text py='2'>
            {product.description}
          </Text>

          <Text>Brand: {product.brand}</Text>
          <Text>Color: {product.color}</Text>
          <Text>Model: {product.model}</Text>
          <Text color="blue.600" fontSize="2xl">
            $ {product.price} USD
          </Text>
        </CardBody>
        <Divider />
        <CardFooter>
          <Wrap justify="center">
            <WrapItem>
              {showButton && (
                <Button variant='solid' colorScheme='blue' onClick={handleShowCount}>
                  Add to cart
                </Button>
              )}
              {showCount && (
                <Stack direction="row" spacing={4} align="center" ml={4}>
                  <Button onClick={handleDecrement}>-</Button>
                  <Text fontSize="lg">{count}</Text>
                  <Button onClick={handleIncrement}>+</Button>
                </Stack>
              )}
            </WrapItem>

            <WrapItem>
              <Link to="/">
                <Button variant='solid' colorScheme='blue' ml={4}>
                  Continue shopping
                </Button>
              </Link>
            </WrapItem>

            <WrapItem>
              <Link to="/checkout">
                <Button variant='solid' colorScheme='blue' ml={4}>
                  Go to cart
                </Button>
              </Link>
            </WrapItem>


          </Wrap>
        </CardFooter>
      </Stack>
    </Card>
  );
};