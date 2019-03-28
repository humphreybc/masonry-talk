import React from "react";
import { styled } from "typestyle-react";

interface Props {
  items: React.ReactNode[];
}

export const MasonryGrid: React.FC<Props> = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item key={i}>{item}</Item>
    ))}
  </Container>
);

const Container = styled("div", {
  display: "grid",
  // gridGap: "32px",
  // gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  // gridAutoRows: 0,
});

const Item = styled("div");
