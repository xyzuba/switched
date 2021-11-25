import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
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
import { Layout } from "../components/Layout";
import { AddIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Index = () => {
  const [{ data, error, fetching }] = useProductsQuery();

  if (!fetching && !data) {
    return <div>{error?.message}</div>;
  }

  return (
    <Layout variant={"xl"}>
      <Grid spacing={12} gap={6} mb={8} templateColumns="repeat(3, 1fr)">
        {data?.products?.map((p) =>
          !p ? null : (
            <Box
              key={p.id}
              p={5}
              outline="transparent"
              borderRadius="10px"
              _hover={{
                borderRadius: "10px",
                outline: "1px solid grey",
                transition: ".35s",
              }}
            >
              <Image
                cloudName={"sreddit-yehor"}
                publicId={"asd_yuhxdh"}
                width="max-content"
              />
              <NextLink href="product/[id]" as={`product/${p.id}`}>
                <Link my={2} textAlign="center">
                  <Heading fontSize={25}>{p.name}</Heading>
                </Link>
              </NextLink>
              <Text textAlign="center" mt={4} fontSize={20}>
                ${p.price}
              </Text>
              <Flex mt={2} justifyContent="center">
                <IconButton color="#87ceeb" aria-label="" icon={<AddIcon />} />
              </Flex>
            </Box>
          )
        )}
      </Grid>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Index);
