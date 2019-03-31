import React from "react";

interface Props {
  title: string;
}

export const DocumentTitle: React.FC<Props> = ({ title }) => {
  document.title = title;
  return null;
};
