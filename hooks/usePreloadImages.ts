import { useEffect } from "react";

export function usePreloadImages(filenames: string[]) {
  useEffect(() => {
    filenames.forEach((filename) => {
      const img = new Image();

      img.src = filename;
    });
  }, [filenames]);
}
