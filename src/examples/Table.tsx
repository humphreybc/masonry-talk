import React from "react";
import { styled } from "typestyle-react";
import { Props } from "../types/props";
import { Header } from "../util/Header";

export const Table: React.FC<Props> = ({ items }) => {
  const columnCount = 5;

  let rows: Array<Array<React.ReactNode>> = [];

  for (let i = 0; i < items.length; i++) {
    if (i % columnCount === 0) rows.push([]);
    rows[rows.length - 1].push(items[i]);
  }

  return (
    <>
      <Header cssOnly={false} dynamic={true} layout={false} order={true} responsive={false} />
      <Container>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              {row.map((item, j) => (
                <TableCell key={j}>{item}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Container>
    </>
  );
};

const Container = styled("table", {
  borderCollapse: "collapse",
  width: "100%",
});

const TableBody = styled("tbody");

const TableRow = styled("tr");

const TableCell = styled("td", {
  padding: "16px",
  verticalAlign: "top",
});
