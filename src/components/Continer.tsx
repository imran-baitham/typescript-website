import React from "react";

type ContinerCss = {
  styles: React.CSSProperties;
};

export function Continer(props: ContinerCss) {
  return <div style={props.styles}>Continer</div>;
}

export type namesProps = {
  nameone: string;
  nametwo: string;
};