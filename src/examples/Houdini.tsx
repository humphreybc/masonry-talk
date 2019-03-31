import React from "react";
import { media } from "typestyle";
import { styled } from "typestyle-react";
import { Props } from "../types/props";
import { Header } from "../util/Header";

const GAP = 32;

export const Houdini: React.FC<Props> = ({ items }) => (
  <>
    <Header cssOnly={false} dynamic={true} layout={true} order={true} responsive={true} />
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
    display: "layout(masonry)",
    margin: -GAP,
    "--padding": GAP,
    "--columns": 1,
  },
  media(
    { minWidth: 440 },
    {
      "--columns": 2,
    },
  ),
  media(
    { minWidth: 880 },
    {
      "--columns": 4,
    },
  ),
  media(
    { minWidth: 1200 },
    {
      "--columns": 6,
    },
  ),
);

const Item = styled("div");
