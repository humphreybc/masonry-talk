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
import { TextSlide } from "./util/TextSlide";

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

storiesOf("Slides", module).add("Intro", () => <TextSlide text="The State of CSS Masonry in 2019" />);
