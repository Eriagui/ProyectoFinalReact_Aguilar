import { useContext } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../../context";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  const { cartState } = useContext(CartContext);

  const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

  return (
    <Box>
      <Link to="/checkout">
        <Flex
          alignItems={"center"}
          height={"100%"}
          justifyContent={"space-between"}
          width={"60px"}
        >
          <IoCartOutline size={30} />
          <Text fontSize={"1.5rem"}>{qtyTotalItems}</Text>
        </Flex>
      </Link>
    </Box>
  );
};
