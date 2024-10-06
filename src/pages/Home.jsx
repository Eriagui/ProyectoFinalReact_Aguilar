import React from "react";
import { ItemListContainer } from "../components";
import { useItemsCollection } from "../hooks";
import { Flex, Spinner, Box } from "@chakra-ui/react";
import { SkeletonItem } from "../components/SkeletonItem";

export const Home = () => {
  const { items, loading, error } = useItemsCollection("products");

  return loading ? (
    <Flex justifyContent={"center"} alignItems={"center"} h={"90vh"}>
      {/*<Spinner />*/}
      <SkeletonItem/>
    </Flex>
  ) : error ? (
    <Box>
      There is an error while loading the products. Please contact IT support. 
    </Box>
  ) : (
    <ItemListContainer products={items} />
  );
};
