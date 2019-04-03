import React, { useState } from "react";
import ReactResizeDetector from "react-resize-detector";
import { generateItems } from "src/util/generateItems";
import { styled } from "typestyle-react";
import { Header } from "../util/Header";

// This example is broken

const GAP = 32;

export const Custom: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const minColumnWidth = 200;
  const margin = GAP / 2;

  const count = columnCount(containerWidth, GAP, minColumnWidth);
  const columns = sort(count, generateItems(25));

  return (
    <>
      <Header cssOnly={false} dynamic={true} layout={true} order={true} responsive={true} />
      <Container>
        {columns.map((column, i) => (
          <div key={i} style={{ flex: "1 1 auto", width: `${100 / columns.length}%` }}>
            {column.map((item, j) => (
              <div key={j} style={{ padding: margin }}>
                {item}
              </div>
            ))}
          </div>
        ))}
        <ReactResizeDetector handleWidth onResize={width => setContainerWidth(width)} />
      </Container>
    </>
  );
};

const Container = styled("div", {
  display: "flex",
  margin: -16,
});

function sort(count: number, items: React.ReactNode[]): Array<Array<React.ReactNode>> {
  let columns: Array<Array<React.ReactNode>> = Array.apply([], Array(count)).map(() => []);
  let curr = 0;

  for (const i in items) {
    columns[curr].push(items[i]);
    curr = curr < count - 1 ? curr + 1 : 0;
  }

  return columns;
}

function columnCount(containerWidth: number, gap: number, minColumnWidth: number): number {
  const columns = Math.floor((containerWidth + gap) / (minColumnWidth + gap));
  return Math.max(columns, 1);
}
