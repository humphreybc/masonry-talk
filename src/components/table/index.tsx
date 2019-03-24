import React from "react";
import { style } from "typestyle-react";

interface Props {
  columns: number;
  items: React.ReactNode[];
}

export const Table: React.FC<Props> = ({ columns, items }) => (
  <table className={tableClassName}>
    <tbody>
      <tr>
        {items.map((item, index) => (
          <td key={index}>{item}</td>
        ))}
      </tr>
    </tbody>
  </table>
);

const tableClassName = style({
  width: "100%"
});
