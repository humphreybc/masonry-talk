import pinterest from "!file-loader!./images/pinterest.png";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Columns } from "./examples/Columns";
import { Flex } from "./examples/Flex";
import { Grid } from "./examples/Grid";
import { Houdini } from "./examples/Houdini";
import { DocumentTitle } from "./util/DocumentTitle";
import { SlideBulletList } from "./util/SlideBulletList";
import { SlideContainer } from "./util/SlideContainer";
import { SlideTitle } from "./util/SlideTitle";

storiesOf("Talk", module)
  .add("Intro", () => (
    <SlideContainer>
      <DocumentTitle title="Title" />
      <SlideTitle text="The State of CSS Masonry in 2019" />
    </SlideContainer>
  ))
  .add("Screenshot", () => (
    <img src={pinterest} style={{ borderRadius: "8px", boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)" }} width="100%" />
  ))
  .add("Constraints", () => (
    <SlideContainer>
      <DocumentTitle title="Constraints" />
      <SlideBulletList
        items={[
          "Brick layout like Pinterest",
          "Left-to-right order",
          "Dynamic column width",
          "Responsive for mobile",
          "CSS only",
        ]}
      />
    </SlideContainer>
  ))
  .add("Flex", () => (
    <>
      <DocumentTitle title="Flex" />
      <Flex />
    </>
  ))
  .add("Columns", () => (
    <>
      <DocumentTitle title="Columns" />
      <Columns />
    </>
  ))
  .add("Grid", () => (
    <>
      <DocumentTitle title="Grid" />
      <Grid />
    </>
  ))
  .add("Houdini intro", () => (
    <SlideContainer>
      <DocumentTitle title="Houdini intro" />
      <SlideBulletList
        items={[
          "Extends native CSS",
          "Executed by browser pipeline",
          "Removes need for polyfills",
          "Still in development",
          "css-houdini.rocks",
        ]}
      />
    </SlideContainer>
  ))
  .add("Houdini", () => (
    <>
      <DocumentTitle title="Houdini" />
      <Houdini />
    </>
  ))
  // .add("Custom", () => (
  //   <>
  //     <DocumentTitle title="Custom" />
  //     <Custom />
  //   </>
  // ))
  // .add("Table", () => (
  //   <>
  //     <DocumentTitle title="Table" />
  //     <Table />
  //   </>
  // ))
  .add("Outro", () => (
    <SlideContainer>
      <DocumentTitle title="Outro" />
      <SlideBulletList items={["Benjamin Humphrey", "humphreybc.com", "dovetailapp.com", "@hidovetail"]} />
    </SlideContainer>
  ));
