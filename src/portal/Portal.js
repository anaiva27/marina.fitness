import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }) => {
  const parentRef = useRef(document.createElement("div"));
  useEffect(() => {
    document.body.appendChild(parentRef.current);
    return () => {
      try {
        document.body.removeChild(parentRef.current);
      } catch (err) {
        console.log({ err });
      }
    };
  }, []);
  return createPortal(children, parentRef.current);
};
