import React from "react";
import { styled } from "typestyle-react";
import { COLORS } from "./colors";

interface Props {
  text: string;
}

export const SlideTitle: React.FC<Props> = ({ text }) => <Heading>{text}</Heading>;

const Heading = styled("h1", {
  color: COLORS.indigo,
  fontSize: "96px",
  fontWeight: 700,
  lineHeight: "96px",
  margin: 0,
  padding: 0,
});
