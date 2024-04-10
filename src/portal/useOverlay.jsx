import { useEffect } from "react";

export const useOverlay = (isOpen) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
};
