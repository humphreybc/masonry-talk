import { storiesOf } from "@storybook/react";
import React from "react";
import { MasonryTable } from ".";
import { Box } from "../Box";
import { COLORS } from "src/util/colors";

storiesOf("Table", module).add("Example", () => (
  <MasonryTable
    columns={3}
    items={[
      <Box color={COLORS.blue} height={200} label={1} />,
      <Box color={COLORS.red} height={400} label={2} />,
      <Box color={COLORS.orange} height={100} label={3} />,
      <Box color={COLORS.green} height={500} label={4} />,
      <Box color={COLORS.yellow} height={100} label={5} />,
      <Box color={COLORS.orange} height={300} label={6} />,
      <Box color={COLORS.navy} height={400} label={7} />
    ]}
  />
));
