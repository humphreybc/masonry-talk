import React from "react";
import { styled } from "typestyle-react";
import { COLORS } from "./colors";

interface Props {
  items: string[];
}

export const SlideBulletList: React.FC<Props> = ({ items }) => (
  <List>
    {items.map((item, i) => (
      <Item key={i}>{item}</Item>
    ))}
  </List>
);

const List = styled("div", {
  color: COLORS.indigo,
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "64px",
  margin: 0,
  padding: 0,
});

const Item = styled("div", {
  padding: "0 0 40px",
});
