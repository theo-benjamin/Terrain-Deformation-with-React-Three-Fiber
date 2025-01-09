/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";

function FrameLimiter({ fps = 60 }) {
  const { advance, set, frameloop: initFrameloop } = useThree();

  useLayoutEffect(() => {
    let elapsed = 0;
    let then = 0;
    let raf = null;
    const interval = 1000 / fps;
    function tick(t) {
      raf = requestAnimationFrame(tick);
      elapsed = t - then;
      if (elapsed > interval) {
        advance();
        then = t - (elapsed % interval);
      }
    }

    set({ frameloop: "never" });

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      set({ frameloop: initFrameloop });
    };
  }, [fps]);
}

export default FrameLimiter;
