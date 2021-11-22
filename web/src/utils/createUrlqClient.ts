import { cacheExchange, dedupExchange, fetchExchange } from "urql";

export const createUrqlClient = (ssrExchange: any) => ({
  url: "http://localhost:5000/graphql",
  fetchOptions: {
    credentials: "include" as const,
  },
  exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
});
