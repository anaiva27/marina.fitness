import { useEffect } from "react";

export const useClickOutside = (ref, onClickOutside) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref && !ref.contains(event.target)) {
        onClickOutside(event);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
