import React from "react";
import { media } from "typestyle";
import { styled } from "typestyle-react";
import { Props } from "../types/props";

export const Columns: React.FC<Props> = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item key={i}>{item}</Item>
    ))}
  </Container>
);

const Container = styled(
  "div",
  {
    columnCount: 1,
    columnGap: "32px",
  },
  media(
    { minWidth: 440 },
    {
      columnCount: 2,
    },
  ),
  media(
    { minWidth: 880 },
    {
      columnCount: 4,
    },
  ),
  media(
    { minWidth: 1200 },
    {
      columnCount: 6,
    },
  ),
);

const Item = styled("div", {
  display: "inline-block",
  marginBottom: "32px",
  width: "100%",
});
