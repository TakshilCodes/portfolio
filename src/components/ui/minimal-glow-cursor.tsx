"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const interactiveSelector =
  'a, button, input, textarea, select, summary, [role="button"], [data-cursor="interactive"]';

export function MinimalGlowCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const rawX = useMotionValue(-24);
  const rawY = useMotionValue(-24);
  const x = useSpring(rawX, { stiffness: 850, damping: 42, mass: 0.25 });
  const y = useSpring(rawY, { stiffness: 850, damping: 42, mass: 0.25 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabled = () => {
      const shouldEnable = finePointer.matches && !reducedMotion.matches;

      setEnabled(shouldEnable);
      document.documentElement.classList.toggle("minimal-glow-cursor-enabled", shouldEnable);
      if (!shouldEnable) setVisible(false);
    };

    const isInteractive = (target: EventTarget | null) =>
      target instanceof Element && Boolean(target.closest(interactiveSelector));

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || reducedMotion.matches) return;

      rawX.set(event.clientX);
      rawY.set(event.clientY);
      setVisible(true);
      setActive(isInteractive(event.target));
    };

    const onPointerLeave = () => setVisible(false);

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    return () => {
      document.documentElement.classList.remove("minimal-glow-cursor-enabled");
      finePointer.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_16px_rgba(34,211,238,0.55),0_0_34px_rgba(34,211,238,0.22)] mix-blend-screen"
      style={{ x, y, marginLeft: -5, marginTop: -5 }}
      animate={{ opacity: visible ? 1 : 0, scale: active ? 1.75 : 1 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
    />
  );
}