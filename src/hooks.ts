import { useState, useLayoutEffect } from "react";

interface WindowSize {
  innerWidth: number;
  innerHeight: number;
}

export const useWindowSize = (defaultValue: number): WindowSize => {
  const [windowSize, setWindowSize] = useState({
    innerWidth: defaultValue,
    innerHeight: defaultValue
  });

  useLayoutEffect(() => {
    setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    });
  }, []);

  return windowSize;
};
