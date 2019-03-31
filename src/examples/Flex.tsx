import React from "react";
import { styled } from "typestyle-react";
import { Props } from "../types/props";
import { Header } from "../util/Header";

export const Flex: React.FC<Props> = ({ items }) => (
  <>
    <Header cssOnly={true} dynamic={false} layout={false} order={true} responsive={true} />
    <Container>
      {items.map((item, i) => (
        <Item key={i}>{item}</Item>
      ))}
    </Container>
  </>
);

const Container = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "-16px",
});

const Item = styled("div", {
  margin: "16px",
  width: "200px",
});
