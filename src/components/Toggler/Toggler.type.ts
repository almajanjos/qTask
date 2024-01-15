import React from "react";

interface ChildrenParams {
  show: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

interface TogglerProps {
  children: ({ show, open, toggle, close }: ChildrenParams) => JSX.Element;
}

export type { TogglerProps };
