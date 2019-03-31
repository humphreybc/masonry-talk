import React from "react";
import { media } from "typestyle";
import { styled } from "typestyle-react";
import { Props } from "../types/props";
import { Header } from "../util/Header";

export const Columns: React.FC<Props> = ({ items }) => (
  <>
    <Header cssOnly={true} dynamic={true} layout={true} order={false} responsive={true} />
    <Container>
      {items.map((item, i) => (
        <Item key={i}>{item}</Item>
      ))}
    </Container>
  </>
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
