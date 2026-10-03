// Tiny History API router: enough for a home page plus a /projects page,
// without pulling in a routing library.
import { useSyncExternalStore } from "react";

const subscribe = (cb) => {
  window.addEventListener("popstate", cb);
  return () => window.removeEventListener("popstate", cb);
};
const getPath = () => window.location.pathname.replace(/\/+$/, "") || "/";

export const usePath = () => useSyncExternalStore(subscribe, getPath);

export function navigate(to) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
  // After React has rendered the new page, jump to the #section or the top.
  requestAnimationFrame(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const el = id && document.getElementById(id);
    if (el) el.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" });
  });
}

export function Link({ to, onClick, ...props }) {
  return (
    <a
      href={to}
      onClick={(e) => {
        onClick?.(e);
        if (
          e.defaultPrevented ||
          e.button !== 0 ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey
        )
          return;
        e.preventDefault();
        navigate(to);
      }}
      {...props}
    />
  );
}
