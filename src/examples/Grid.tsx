import React from "react";
import { generateItems } from "src/util/generateItems";
import { styled } from "typestyle-react";
import { Header } from "../util/Header";

const GAP = 32;
const AUTO_ROWS = 0;

export const Grid: React.FC = () => (
  <>
    <Header cssOnly={false} dynamic={true} layout={true} order={true} responsive={true} />
    <Container>
      {generateItems(25).map((item, i) => (
        <Item
          innerRef={item => {
            if (item !== null) {
              // Set the item to span across multiple rows based on the
              // height of its contents
              const contents = item.children[0] as HTMLElement;
              const height = contents.getBoundingClientRect().height;
              const rowSpan = Math.ceil((height + GAP) / (AUTO_ROWS + GAP));
              item.style.gridRowEnd = "span " + rowSpan;

              // Set the contents to completely fill the number of rows
              // to ensure an even gap
              contents.style.height = "100%";
            }
          }}
          key={i}
        >
          {item}
        </Item>
      ))}
    </Container>
  </>
);

const Container = styled("div", {
  display: "grid",
  gridGap: 32,
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gridAutoRows: 0,
});

const Item = styled("div");
