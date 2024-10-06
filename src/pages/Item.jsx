import React from "react";
import { useParams } from "react-router";
import { useProductById } from "../hooks";
import { ItemDetailContainer } from "../components";
import { Spinner } from "@chakra-ui/react";
import { SkeletonItemDetail } from "../components/SkeletonItemDetail";

export const Item = () => {
  const { id } = useParams();

  const { product, loading } = useProductById(id);

  /*return loading ? <Spinner /> : <ItemDetailContainer product={product} />;*/
  return loading ? <SkeletonItemDetail /> : <ItemDetailContainer product={product} />;
};
