import { useEffect, type ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      document.documentElement.style.setProperty("--circuit-scroll", "0px");
      return;
    }

    let frameId = 0;

    const updateCircuitScroll = () => {
      frameId = 0;
      document.documentElement.style.setProperty("--circuit-scroll", `${window.scrollY * -0.08}px`);
    };

    const requestUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateCircuitScroll);
    };

    updateCircuitScroll();
    window.addEventListener("scroll", requestUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      document.documentElement.style.removeProperty("--circuit-scroll");
    };
  }, []);

  return (
    <>
      <div className="background-circuitry" aria-hidden="true">
        <svg className="circuit-detail circuit-detail--top-left" viewBox="0 0 220 96" focusable="false">
          <path className="circuit-path circuit-path--muted" d="M38 22H98L124 44H168L190 62H216" />
          <path className="circuit-path circuit-path--accent" d="M8 22H24" />
          <path className="circuit-path circuit-path--accent" d="M30 22H36" />
          <path className="circuit-path circuit-path--accent" d="M42 22H48" />
          <path className="circuit-path circuit-path--muted" d="M112 54H158" />
          <circle className="circuit-node circuit-node--accent" cx="8" cy="22" r="3" />
        </svg>

        <svg className="circuit-detail circuit-detail--top-right" viewBox="0 0 260 136" focusable="false">
          <path className="circuit-path circuit-path--primary" d="M18 84H80L112 52H154L184 22H222" />
          <path className="circuit-path circuit-path--muted" d="M184 22H238L252 36" />
          <circle className="circuit-node circuit-node--primary" cx="18" cy="84" r="4" />
          <circle className="circuit-node circuit-node--primary-soft" cx="222" cy="22" r="3" />
          <path className="circuit-path circuit-path--accent" d="M198 48H202" />
          <path className="circuit-path circuit-path--accent" d="M210 48H214" />
          <path className="circuit-path circuit-path--accent" d="M222 48H226" />
          <path className="circuit-path circuit-path--accent" d="M234 48H238" />
        </svg>

        <svg className="circuit-detail circuit-detail--left-rail" viewBox="0 0 84 460" focusable="false">
          <path className="circuit-path circuit-path--accent" d="M32 0V136L20 148V232" />
          <path className="circuit-path circuit-path--muted" d="M20 246V336L48 308V448" />
          <path className="circuit-path circuit-path--muted" d="M50 32V128" />
          <circle className="circuit-node circuit-node--accent" cx="32" cy="0" r="4" />
          <path className="circuit-path circuit-path--accent" d="M12 176H18" />
          <path className="circuit-path circuit-path--accent" d="M12 190H18" />
          <path className="circuit-path circuit-path--accent" d="M12 204H18" />
        </svg>

        <span className="circuit-dots circuit-dots--hero" />
        <span className="circuit-dots circuit-dots--lower" />
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
