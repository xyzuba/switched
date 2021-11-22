import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

import { withUrqlClient } from "next-urql";
import React from "react";
import { useProductsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrlqClient";

const Index = () => {
  const [{ data, error, fetching }] = useProductsQuery();

  if (!fetching && !data) {
    return <div>{error?.message}</div>;
  }

  return (
    <Grid spacing={12} gap={6} mb={8} templateColumns="repeat(5, 1fr)">
      {data?.products?.map((p) =>
        !p ? null : (
          // <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box
            key={p.id}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="10px"
            // w="100%"
            // h="100%"
          >
            <Flex justifyContent="space-between">
              <Link>
                <Heading fontSize={25}>{p.name}</Heading>
              </Link>
              <Flex alignSelf="center"></Flex>
            </Flex>
            <Text mt={4} fontSize={20}>
              ${p.price}
            </Text>
          </Box>
          // </Grid>
        )
      )}
    </Grid>
  );
};

export default withUrqlClient(createUrqlClient)(Index);
