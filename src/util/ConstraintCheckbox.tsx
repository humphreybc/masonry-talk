import React from "react";
import { styled } from "typestyle-react";
import { COLORS } from "./colors";

interface Props {
  checked: boolean;
  label: string;
}

export const ConstraintCheckbox: React.FC<Props> = ({ checked, label }) => (
  <Container styled={{ checked }}>
    <Checkbox>
      {checked ? (
        <svg height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m20 7-11 11-5-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ) : (
        <svg height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m12 12 6-6-6 6-6-6zm0 0-6 6 6-6 6 6z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      )}
    </Checkbox>
    <Label>{label}</Label>
  </Container>
);

const Container = styled("div", ({ checked }: { checked: boolean }) => ({
  alignItems: "center",
  color: checked ? COLORS.indigo : COLORS.red,
  display: "flex",
}));

const Checkbox = styled("div", {
  alignItems: "center",
  borderRadius: "4px",
  display: "flex",
  height: "32px",
  justifyContent: "center",
  marginRight: "12px",
  width: "32px",
});

const Label = styled("p", {
  fontSize: "22px",
  fontWeight: 700,
  lineHeight: "32px",
  margin: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
