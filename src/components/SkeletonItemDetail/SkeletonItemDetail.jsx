import React from "react";
import { Flex, Skeleton, Stack, Box, Card, CardBody, Image, Heading, Text, Divider, CardFooter, ButtonGroup, HStack, Wrap } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SkeletonItemDetail = () => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} mt="10" mb="20%">
      <HStack spacing="80px">
      <Skeleton>
          <Box width={"400px"} height={"400px"}/>
        </Skeleton>
        <Skeleton>
          <Box width={"800px"} height={"400px"}/>
        </Skeleton>
      </HStack>
    </Box>
  );
};
