import React from "react";
import { Skeleton, Box, HStack, } from "@chakra-ui/react";

export const SkeletonItem = () => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} mt="10" mb="20%" ml="1rem">
      <HStack spacing="50px">
        <Skeleton>
          <Box width={"400px"} height={"800px"} />
        </Skeleton>
        <Skeleton>
          <Box width={"400px"} height={"800px"} />
        </Skeleton>
        <Skeleton>
          <Box width={"400px"} height={"800px"} />
        </Skeleton>
      </HStack>
    </Box>
  );
};
