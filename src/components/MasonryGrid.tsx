import React from "react";
import { styled } from "typestyle-react";

interface Props {
  items: React.ReactNode[];
}

const GAP = 32;
const AUTO_ROWS = 0;

export const MasonryGrid: React.FC<Props> = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item
        key={i}
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
      >
        {item}
      </Item>
    ))}
  </Container>
);

const Container = styled("div", {
  display: "grid",
  gridGap: GAP,
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gridAutoRows: AUTO_ROWS,
});

const Item = styled("div");
