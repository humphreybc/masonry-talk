import { storiesOf } from "@storybook/react";
import React from "react";
import { Table } from ".";
import { Box } from "../box";
import { COLORS } from "src/util/colors";

storiesOf("Table", module).add("Example", () => (
  <Table
    columns={3}
    items={[
      <Box color={COLORS.blue} height={200} label={1} />,
      <Box color={COLORS.red} height={400} label={2} />,
      <Box color={COLORS.orange} height={100} label={3} />,
      <Box color={COLORS.green} height={500} label={4} />,
      <Box color={COLORS.yellow} height={100} label={5} />
    ]}
  />
));
