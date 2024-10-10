import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  // const categories = products.map((product) => product.category);
  // Set es una estructura de datos que no permite duplicados
  // const uniqueCategories = [...new Set(categories)];
  // console.log(uniqueCategories)
  return (
    <Box display={"flex"} flexWrap={"wrap"} mt="10" mb="20%">
      {products.map((product) => (
        <Card key={product.id} maxW="sm" margin={"1rem"}>
          <CardBody>
            <Image
              src={product.image}
              alt={product.name}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.title}</Heading>
              <Text>{product.category}</Text>
              <Text color="blue.600" fontSize="2xl">
                $ {product.price} USD
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Link to={`/item/${product.id}`}>
                See more...
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};
