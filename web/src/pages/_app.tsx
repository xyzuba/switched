import { ChakraProvider } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import type { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
