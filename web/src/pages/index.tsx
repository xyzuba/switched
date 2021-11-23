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
//@ts-ignore
import { Image } from "cloudinary-react";

const Index = () => {
  const [{ data, error, fetching }] = useProductsQuery();

  if (!fetching && !data) {
    return <div>{error?.message}</div>;
  }

  return (
    <Grid spacing={12} gap={6} mb={8} templateColumns="repeat(5, 1fr)">
      {data?.products?.map((p) =>
        !p ? null : (
          <Box
            key={p.id}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="10px"
          >
            {/* <Image
              cloudName={"sreddit-yehor"}
              publicId={p.image}
              width="max-content"
            /> */}
            <Flex justifyContent="space-between">
              <Link>
                <Heading fontSize={25}>{p.name}</Heading>
              </Link>
            </Flex>
            <Text mt={4} fontSize={20}>
              ${p.price}
            </Text>
          </Box>
        )
      )}
    </Grid>
  );
};

export default withUrqlClient(createUrqlClient)(Index);
