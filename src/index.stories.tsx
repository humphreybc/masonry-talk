import { storiesOf } from "@storybook/react";
import React from "react";
import { generateItems } from "src/util/generateItems";
import { MasonryAbsolute } from "./components/MasonryAbsolute";
import { MasonryColumns } from "./components/MasonryColumns";
import { MasonryFlex } from "./components/MasonryFlex";
import { MasonryGrid } from "./components/MasonryGrid";

storiesOf("Masonry", module)
  .add("Flex", () => <MasonryFlex items={generateItems(100)} />)
  .add("Columns", () => <MasonryColumns items={generateItems(100)} />)
  .add("Grid", () => <MasonryGrid items={generateItems(100)} />)
  .add("Absolute", () => <MasonryAbsolute items={generateItems(100)} />);
