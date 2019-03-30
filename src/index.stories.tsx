import { storiesOf } from "@storybook/react";
import React from "react";
import { generateItems } from "src/util/generateItems";
import { Columns } from "./examples/Columns";
import { CustomColumns } from "./examples/CustomColumns";
import { Flex } from "./examples/Flex";
import { Grid } from "./examples/Grid";
import { Houdini } from "./examples/Houdini";
import { TextSlide } from "./util/TextSlide";

storiesOf("Examples", module)
  .add("Flex", () => {
    document.title = "Flex";
    return <Flex items={generateItems(50)} />;
  })
  .add("Columns", () => {
    document.title = "Columns";
    return <Columns items={generateItems(50)} />;
  })
  .add("Custom columns", () => {
    document.title = "Custom columns";
    return <CustomColumns items={generateItems(50)} />;
  })
  .add("Grid", () => {
    document.title = "Grid";
    return <Grid items={generateItems(50)} />;
  })
  .add("Houdini", () => {
    document.title = "Houdini";
    return <Houdini items={generateItems(50)} />;
  });

storiesOf("Slides", module).add("Intro", () => <TextSlide text="The State of CSS Masonry in 2019" />);
