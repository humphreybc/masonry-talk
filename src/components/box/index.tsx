import React from "react";
import { styled } from "typestyle-react";

interface Props {
  color: string;
  height: number;
  label: number;
}

export const Box: React.FC<Props> = ({ color, height, label }) => (
  <Wrapper styled={{ color, height }}>{label}</Wrapper>
);

const Wrapper = styled(
  "div",
  ({ color, height }: { color: string; height: number }) => ({
    alignItems: "center",
    backgroundColor: color,
    color: "#fff",
    display: "flex",
    fontSize: "64px",
    height,
    justifyContent: "center",
    width: "100%"
  })
);
