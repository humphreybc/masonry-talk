import React from "react";
import { generateItems } from "src/util/generateItems";
import { styled } from "typestyle-react";
import { Header } from "../util/Header";

export const Table: React.FC = () => {
  const columnCount = 5;
  const items = generateItems(25);

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
