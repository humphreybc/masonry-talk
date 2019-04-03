import React from "react";
import { generateItems } from "src/util/generateItems";
import { styled } from "typestyle-react";
import { Header } from "../util/Header";

export const Flex: React.FC = () => (
  <>
    {/* <Header cssOnly={true} dynamic={false} layout={false} order={true} responsive={true} /> */}
    <Container>
      {generateItems(25).map((item, i) => (
        <Item key={i}>{item}</Item>
      ))}
    </Container>
  </>
);

const Container = styled("div", {
  display: "flex",
  // flexWrap: "wrap",
  // justifyContent: "center",
  // margin: "-16px",
});

const Item = styled("div", {
  // margin: "16px",
  // width: "200px",
});
