import React from "react";
import { styled } from "typestyle-react";

interface Props {
  children: React.ReactNode;
}

export const SlideContainer: React.FC<Props> = ({ children }) => <Container>{children}</Container>;

const Container = styled("div", {
  backgroundColor: "#EEECF1",
  borderRadius: "8px",
  padding: "64px",
});
