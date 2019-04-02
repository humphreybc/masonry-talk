import React from "react";
import { styled } from "typestyle-react";
import { COLORS_ARRAY } from "./colors";

export const generateItems = (count: number) => {
  let items: React.ReactNode[] = [];

  for (let i = 1; i < count + 1; i++) {
    items.push(
      <Box
        styled={{
          color: COLORS_ARRAY[i % COLORS_ARRAY.length],
          height: Math.floor(Math.random() * 500) + 100,
        }}
      >
        {i}
      </Box>,
    );
  }

  return items;
};

const Box = styled("div", ({ color, height }: { color: string; height: number }) => ({
  alignItems: "flex-start",
  backgroundColor: color,
  borderRadius: "8px",
  color: "#fff",
  display: "flex",
  fontSize: "48px",
  fontWeight: 700,
  height,
  justifyContent: "center",
  padding: "32px 16px",
  transition: "height 500ms 500ms ease-in-out",
  width: "100%",
}));
