import { Box } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import React from "react";
import { createUrqlClient } from "../utils/createUrlqClient";

const NavBar = () => {
  return (
    <Box>
      <Box>navbar</Box>
    </Box>
  );
};

export default withUrqlClient(createUrqlClient)(NavBar);
