import { useState } from "react";
import withLog from "../../hoc/withLog";
import { TogglerProps } from "./Toggler.type";

function Toggler({ children }: TogglerProps) {
  const [show, setShow] = useState<boolean>(false);

  function toggle() {
    setShow(!show);
  }

  function open() {
    setShow(true);
  }
  function close() {
    setShow(false);
  }

  return <>{children({ show, toggle, open, close })}</>;
}

Toggler.displayName = "Toggler";
export default withLog(Toggler);
