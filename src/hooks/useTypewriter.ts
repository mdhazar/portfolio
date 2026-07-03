import { useEffect, useState } from "react";

export function useTypewriter(
  text: string,
  opts?: { msPerChar?: number; startDelay?: number; enabled?: boolean },
): { typed: string; done: boolean } {
  const { msPerChar = 70, startDelay = 500, enabled = true } = opts ?? {};

  const [count, setCount] = useState(0);
  const [doneState, setDoneState] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    let index = 0;
    let charTimer: ReturnType<typeof setTimeout> | undefined;
    let doneTimer: ReturnType<typeof setTimeout> | undefined;

    const finish = () => {
      doneTimer = setTimeout(() => setDoneState(true), 350);
    };

    const reveal = () => {
      index += 1;
      setCount(index);
      if (index < text.length) {
        charTimer = setTimeout(reveal, msPerChar);
      } else {
        finish();
      }
    };

    const startTimer = setTimeout(() => {
      setCount(0);
      setDoneState(false);
      if (text.length === 0) {
        finish();
      } else {
        reveal();
      }
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(charTimer);
      clearTimeout(doneTimer);
    };
  }, [text, msPerChar, startDelay, enabled]);

  if (!enabled) {
    return { typed: text, done: true };
  }
  return { typed: text.slice(0, count), done: doneState };
}
