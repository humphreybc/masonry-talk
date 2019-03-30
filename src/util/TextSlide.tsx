import React from "react";
import { styled } from "typestyle-react";

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
  color: "#24124d",
  fontSize: "128px",
  fontWeight: 700,
  lineHeight: "120px",
  margin: 0,
  padding: 0,
});
