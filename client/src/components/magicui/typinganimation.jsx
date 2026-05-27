

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function TypingAnimation({
  children,
  className,
  duration = 180,
  showCursor = true,
  loop = false,
  pauseDuration = 1000,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const text = typeof children === "string" ? children : children?.toString() || "";

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (!isDeleting && i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else if (!isDeleting && i === text.length && loop) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && i > 0) {
        setDisplayedText(text.substring(0, i - 1));
        setI(i - 1);
      } else if (isDeleting && i === 0) {
        setIsDeleting(false);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text, isDeleting, loop, pauseDuration]);

  return (
    <span className={cn("inline", className)}>
      {displayedText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
}