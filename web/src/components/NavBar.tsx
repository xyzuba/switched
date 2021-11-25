import { Box, Button, Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { QuestionIcon, Search2Icon, WarningIcon } from "@chakra-ui/icons";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Box zIndex={1} position="sticky" top={0} bg="#6699cc" p={4}>
      <Flex
        justifyContent="space-between"
        ml={"auto"}
        color="white"
        fontSize="xl"
        alignItems="center"
      >
        <Flex
          justifyContent="space-between"
          width="1000px"
          mx="auto"
          alignItems="center"
        >
          <NextLink href="/">
            <Heading>LOGO</Heading>
          </NextLink>
          <Flex fontWeight="light" fontSize={18}>
            <Link mx={6}>shop</Link>
            <Link mx={6}>collections</Link>
            <Link mx={6}>newest</Link>
          </Flex>
          <Flex>
            <Button aria-label="" mx={2} fontSize={20} p={0} variant="ghost">
              <AiOutlineUser />
            </Button>
            <Button aria-label="" mx={2} fontSize={20} p={0} variant="ghost">
              <AiOutlineSearch />
            </Button>
            <Button aria-label="" mx={2} fontSize={20} p={0} variant="ghost">
              <AiOutlineShoppingCart />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

// export default withUrqlClient(createUrqlClient)(NavBar);
