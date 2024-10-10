import React from "react";
import { useParams } from "react-router";
import { useProductById } from "../hooks";
import { ItemDetailContainer } from "../components";
import { SkeletonItemDetail } from "../components/SkeletonItemDetail";

export const Item = () => {

  // useParams hook returns an object of key/value pairs of the dynamic params from the current URL
  //that were matched by the Route path
  const { id } = useParams();

  const { product, loading } = useProductById(id);

  return loading ? <SkeletonItemDetail /> : <ItemDetailContainer product={product} />;
};
