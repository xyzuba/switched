import React from "react";
import { Wrapper, WrapperVariarnt } from "./Wrapper";

interface LayoutProps {
  variant?: WrapperVariarnt;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
