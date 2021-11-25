import { Spinner } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { useProductQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrlqClient";

const Product = ({}) => {
  const router = useRouter();
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;

  const [{ data, fetching, error }] = useProductQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data && fetching) {
    return <Spinner />;
  }

  if (!data?.product) {
    return <div>no product</div>;
  }

  return (
    <div>
      <div>{data?.product?.desc}</div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(Product);
