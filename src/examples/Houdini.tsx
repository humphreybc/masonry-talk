import React from "react";
import { generateItems } from "src/util/generateItems";
import { media } from "typestyle";
import { styled } from "typestyle-react";
import { Header } from "../util/Header";

export const Houdini: React.FC = () => (
  <>
    <Header cssOnly={false} dynamic={true} layout={true} order={true} responsive={true} />
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
    display: "layout(masonry)",
    margin: -32,
    "--padding": 32,
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
