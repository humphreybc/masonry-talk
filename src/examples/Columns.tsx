import React from "react";
import { generateItems } from "src/util/generateItems";
import { media } from "typestyle";
import { styled } from "typestyle-react";
import { Header } from "../util/Header";

export const Columns: React.FC = () => (
  <>
    <Header cssOnly={true} dynamic={true} layout={true} order={false} responsive={true} />
    <Container>
      {generateItems(25).map((item, i) => (
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
