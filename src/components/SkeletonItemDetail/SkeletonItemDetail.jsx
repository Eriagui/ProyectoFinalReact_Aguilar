import React from "react";
import { Skeleton, Box, HStack } from "@chakra-ui/react";

export const SkeletonItemDetail = () => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} mt="10" mb="20%" ml="1rem">
      <HStack spacing="80px">
        <Skeleton>
          <Box width={"400px"} height={"400px"} />
        </Skeleton>
        <Skeleton>
          <Box width={"800px"} height={"400px"} />
        </Skeleton>
      </HStack>
    </Box>
  );
};
