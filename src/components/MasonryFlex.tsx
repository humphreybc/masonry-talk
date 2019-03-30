import React from "react";
import { styled } from "typestyle-react";
import { Props } from "../interfaces/props";

export const MasonryFlex: React.FC<Props> = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item key={i}>{item}</Item>
    ))}
  </Container>
);

const Container = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "-32px",
});

const Item = styled("div", {
  margin: "16px",
  width: "200px",
});
