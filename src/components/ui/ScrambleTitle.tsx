import { animate, scrambleText } from "animejs";
import { useEffect, useRef } from "react";

type ScrambleTitleProps = {
  text: string;
};

export function ScrambleTitle({ text }: ScrambleTitleProps) {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const textElement = textRef.current;

    if (!textElement || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    textElement.textContent = text;

    const animation = animate(textElement, {
      innerHTML: scrambleText({
        text,
        cursor: "",
        from: "left",
        revealDelay: 60,
        revealRate: 78,
        settleDuration: 260,
        settleRate: 16,
        perturbation: 0.22,
      }),
      loop: true,
      loopDelay: 10000,
    });

    return () => {
      animation.revert();
      textElement.textContent = text;
    };
  }, [text]);

  return (
    <>
      <span className="scramble-title" ref={textRef} aria-hidden="true">
        {text}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}
