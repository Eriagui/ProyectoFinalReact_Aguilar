import React from "react";
import { useParams } from "react-router";
import { ItemListContainer } from "../components";
import { useProductsByCategory } from "../hooks";
import { SkeletonItem } from "../components/SkeletonItem";

export const Category = () => {
  const { categoryId } = useParams();

  const { products, loading } = useProductsByCategory(categoryId);

  if (loading) {
    return <SkeletonItem />;
  } else {
    return <ItemListContainer products={products} />;
  }
};
