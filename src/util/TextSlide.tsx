import React from "react";
import { styled } from "typestyle-react";
import { COLORS } from "./colors";

interface Props {
  text: string;
}

export const TextSlide: React.FC<Props> = ({ text }) => <Heading>{text}</Heading>;

const Heading = styled("h1", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100vh - 96px)",
  width: "100%",
  color: COLORS.indigo,
  fontSize: "128px",
  fontWeight: 700,
  lineHeight: "120px",
  margin: 0,
  padding: 0,
});
