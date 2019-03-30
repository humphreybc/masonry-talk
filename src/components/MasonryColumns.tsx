import React from "react";
import { styled } from "typestyle-react";
import { media } from "typestyle";

interface Props {
  items: React.ReactNode[];
}

export const MasonryColumns: React.FC<Props> = ({ items }) => (
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
    { minWidth: 500 },
    {
      columnCount: 2,
    },
  ),
  media(
    { minWidth: 1000 },
    {
      columnCount: 4,
    },
  ),
);

const Item = styled("div", {
  display: "inline-block",
  marginBottom: "32px",
  width: "100%",
});
