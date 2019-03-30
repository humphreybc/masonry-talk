import { storiesOf } from "@storybook/react";
import React from "react";
import { generateItems } from "src/util/generateItems";
import { MasonryColumns } from "./components/MasonryColumns";
import { MasonryFlex } from "./components/MasonryFlex";
import { MasonryGrid } from "./components/MasonryGrid";

storiesOf("Masonry", module)
  .add("Flex", () => <MasonryFlex items={generateItems(20)} />)
  .add("Columns", () => <MasonryColumns items={generateItems(20)} />)
  .add("Grid", () => <MasonryGrid items={generateItems(20)} />);
