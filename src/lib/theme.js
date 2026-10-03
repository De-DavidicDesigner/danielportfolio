import { useCallback, useState } from "react";

const COLORS = { dark: "#0b0d12", light: "#f5f6f4" };

function apply(mode) {
  document.documentElement.classList.toggle("dark", mode === "dark");
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", COLORS[mode]);
  try {
    localStorage.setItem("theme", mode);
  } catch {
    /* storage unavailable: the choice just won't persist */
  }
}

// index.html sets the initial class before paint, so read it from the DOM.
export function useTheme() {
  const [mode, setMode] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );

  const toggle = useCallback(
    (event) => {
      const next = mode === "dark" ? "light" : "dark";
      const update = () => {
        apply(next);
        setMode(next);
      };
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!document.startViewTransition || reduce) return update();

      // Circular reveal that grows out of the button that was clicked.
      const rect = event?.currentTarget?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : 0;
      const r = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );
      document.startViewTransition(update).ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 550, easing: "cubic-bezier(.4,0,.2,1)", pseudoElement: "::view-transition-new(root)" },
        );
      });
    },
    [mode],
  );

  return { mode, toggle };
}
