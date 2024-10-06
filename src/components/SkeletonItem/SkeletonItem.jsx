import React from "react";
import { Flex, Skeleton, Stack, Box, Card, CardBody, Image, Heading, Text, Divider, CardFooter, ButtonGroup, HStack, Wrap } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SkeletonItem = () => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} mt="10" mb="20%">
      <HStack spacing="50px">
      <Skeleton>
          <Box width={"400px"} height={"800px"}/>
        </Skeleton>
        <Skeleton>
          <Box width={"400px"} height={"800px"}/>
        </Skeleton>
        <Skeleton>
          <Box width={"400px"} height={"800px"}/>
        </Skeleton>
      </HStack>
    </Box>
  );
};
