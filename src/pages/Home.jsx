import React from "react";
import { ItemListContainer } from "../components";
import { useItemsCollection } from "../hooks";
import { Box } from "@chakra-ui/react";
import { SkeletonItem } from "../components/SkeletonItem";

export const Home = () => {
  const { items, loading, error } = useItemsCollection("products");

  return loading ? (
    <SkeletonItem />
  ) : error ? (
    <Box>
      There is an error while loading the products. Please contact IT support.
    </Box>
  ) : (
    <ItemListContainer products={items} />
  );
};
