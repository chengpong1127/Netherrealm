import { useState, useEffect } from "react";

export function useTypewriterEffect(content: string, speed: number = 100) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    // Reset text when content changes
    setDisplayedText("");

    const interval = setInterval(() => {
      if (index < content.length) {
        setDisplayedText(() => {
          return content.substring(0, index);
        });
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => {
      clearInterval(interval);
      setDisplayedText(content);
    };
  }, [content, speed]);

  return displayedText;
}
