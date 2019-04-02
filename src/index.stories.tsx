import { storiesOf } from "@storybook/react";
import React from "react";
import { generateItems } from "src/util/generateItems";
import { Columns } from "./examples/Columns";
import { CustomColumns } from "./examples/CustomColumns";
import { Flex } from "./examples/Flex";
import { Grid } from "./examples/Grid";
import { Houdini } from "./examples/Houdini";
import { Table } from "./examples/Table";
import { DocumentTitle } from "./util/DocumentTitle";
import { SlideBulletList } from "./util/SlideBulletList";
import { SlideContainer } from "./util/SlideContainer";
import { SlideTitle } from "./util/SlideTitle";

storiesOf("Slides", module)
  .add("Intro", () => (
    <SlideContainer>
      <SlideTitle text="The State of CSS Masonry in 2019" />
    </SlideContainer>
  ))
  .add("Constraints", () => (
    <SlideContainer>
      <SlideBulletList
        items={[
          "Brick layout like Pinterest",
          "Left-to-right order",
          "Dynamic width / height items",
          "Responsive for mobile",
          "CSS only",
        ]}
      />
    </SlideContainer>
  ));

storiesOf("Examples", module)
  .add("Flex", () => (
    <>
      <DocumentTitle title="Flex" />
      <Flex items={generateItems(25)} />
    </>
  ))
  .add("Columns", () => (
    <>
      <DocumentTitle title="Columns" />
      <Columns items={generateItems(25)} />
    </>
  ))
  .add("Custom columns", () => (
    <>
      <DocumentTitle title="Custom columns" />
      <CustomColumns items={generateItems(25)} />
    </>
  ))
  .add("Grid", () => (
    <>
      <DocumentTitle title="Grid" />
      <Grid items={generateItems(25)} />
    </>
  ))
  .add("Houdini", () => (
    <>
      <DocumentTitle title="Houdini" />
      <Houdini items={generateItems(25)} />
    </>
  ))
  .add("Table", () => (
    <>
      <DocumentTitle title="Table" />
      <Table items={generateItems(25)} />
    </>
  ));
