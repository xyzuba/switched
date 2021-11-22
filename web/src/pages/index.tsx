import { Box, Flex, Heading, Link, Spinner, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import React from "react";
import { useProductsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrlqClient";

const Index: NextPage = () => {
  const [{ data, error, fetching }] = useProductsQuery();

  if (!fetching && !data) {
    return <div>{error?.message}</div>;
  }

  return (
    <Box>
      {fetching && !data ? (
        <Spinner />
      ) : (
        <Stack>
          {data?.products?.map((p) => {
            !p ? null : (
              <Box
                key={p.id}
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="0 10px 10px 0"
                w="100%"
                h="100%"
              >
                <Flex justifyContent="space-between">
                  <Link>
                    <Heading fontSize={25}>{p.name}</Heading>
                  </Link>
                </Flex>
              </Box>
            );
          })}
        </Stack>
      )}
    </Box>
  );
};

export default withUrqlClient(createUrqlClient)(Index);
