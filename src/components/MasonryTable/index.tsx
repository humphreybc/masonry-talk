import React from "react";
import { styled } from "typestyle-react";

interface Props {
  columns: number;
  items: React.ReactNode[];
}

export const MasonryTable: React.FC<Props> = ({ columns, items }) => {
  let rows: Array<Array<React.ReactNode>> = [];

  for (let i = 0; i < items.length; i++) {
    if (i % columns === 0) rows.push([]);
    rows[rows.length - 1].push(items[i]);
  }

  return (
    <Table>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={i}>
            {row.map((item, j) => (
              <TableCell key={j}>{item}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const Table = styled("table", {
  borderCollapse: "collapse",
  width: "100%"
});

const TableBody = styled("tbody");

const TableRow = styled("tr");

const TableCell = styled("td", {
  padding: "16px",
  verticalAlign: "top"
});
