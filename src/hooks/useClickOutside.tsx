import { RefObject, useEffect } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: Handler) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
