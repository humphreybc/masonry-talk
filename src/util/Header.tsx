import React from "react";
import { styled } from "typestyle-react";
import { ConstraintCheckbox } from "./ConstraintCheckbox";
import { media } from "typestyle";

interface Props {
  cssOnly: boolean;
  dynamic: boolean;
  layout: boolean;
  order: boolean;
  responsive: boolean;
}

export const Header: React.FC<Props> = ({ cssOnly, dynamic, layout, order, responsive }) => (
  <Container>
    <ConstraintCheckbox checked={layout} label="Brick layout" />
    <ConstraintCheckbox checked={order} label="Left-to-right" />
    <ConstraintCheckbox checked={dynamic} label="Dynamic items" />
    <ConstraintCheckbox checked={responsive} label="Responsive" />
    <ConstraintCheckbox checked={cssOnly} label="CSS Only" />
  </Container>
);

const Container = styled(
  "div",
  {
    backgroundColor: "#fff",
    boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.1)",
    display: "grid",
    gridGap: "16px",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    marginBottom: "32px",
    padding: "32px 0",
    position: ["sticky", "-webkit-sticky"],
    top: 0,
    width: "100%",
  },
  media(
    { maxWidth: 440 },
    {
      position: "relative",
    },
  ),
);
