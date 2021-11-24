import { Box, Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { QuestionIcon, Search2Icon, WarningIcon } from "@chakra-ui/icons";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Box zIndex={1} position="sticky" top={0} bg="teal" p={4}>
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
          <Flex mx={2}>
            <IconButton
              aria-label=""
              mx={2}
              variant="ghost"
              icon={<QuestionIcon />}
            />
            <IconButton
              aria-label=""
              variant="ghost"
              mx={2}
              icon={<Search2Icon />}
            />
            <IconButton
              aria-label=""
              variant="ghost"
              mx={2}
              icon={<WarningIcon />}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

// export default withUrqlClient(createUrqlClient)(NavBar);
