import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom";
import { useItemsCollection } from "../../hooks";
/*import { createProductsFirestore } from "../../helpers";*/

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { items } = useItemsCollection("categories");

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} position={"fixed"} top={"0"} left={"0"} zIndex={1} w={"100%"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to="/"><strong>Erick's Store</strong></Link>
          </Box>
          <Box>
            <Link to="/">Home</Link>
          </Box>
          <Box alignContent={"flex-start"} width={"100%"} marginLeft={30}>
            <Menu>
              <MenuButton as={Link} cursor="pointer" style={{ marginLeft: 30 }}>
                Categories
              </MenuButton>
              <MenuList height={"fit-content"} overflowY={"scroll"}>
                {items.map((category) => (
                  <MenuItem key={category.slug}>
                    <Link to={`/category/${category.slug}`}>{category.name}</Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
          {/*<Button onClick={() => createProductsFirestore("products")}>
            Crear productos
                </Button>*/}
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <CartWidget />
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
