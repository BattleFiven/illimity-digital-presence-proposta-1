import { useEffect, useRef, useState, useCallback } from "react";
import Header from "../../imports/Header";

/**
 * Floating header that appears on scroll-up with white background,
 * hides on scroll-down, and stays hidden when near the top of the page
 * (where the original transparent Hero header is visible).
 */
export function ScrollHeader() {
  const [visible, setVisible] = useState(false);
  const [hideMode, setHideMode] = useState<"slide" | "fade">("slide");
  const [activated, setActivated] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  // Track cumulative scroll-up distance to avoid Lenis micro-bounces
  const cumulativeUpDistance = useRef(0);
  const ACTIVATION_THRESHOLD = 300;
  const SCROLL_DELTA = 5;
  // Require at least 60px of cumulative upward scroll before showing
  const REQUIRED_UP_DISTANCE = 60;

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY <= ACTIVATION_THRESHOLD) {
        cumulativeUpDistance.current = 0;
        if (visible) {
          setHideMode("fade");
        }
        setVisible(false);
      } else if (delta < -SCROLL_DELTA) {
        // Accumulate upward scroll distance
        cumulativeUpDistance.current += Math.abs(delta);
        if (cumulativeUpDistance.current >= REQUIRED_UP_DISTANCE) {
          setHideMode("slide");
          setVisible(true);
          setActivated(true);
        }
      } else if (delta > SCROLL_DELTA) {
        // Scrolling DOWN: reset accumulator, slide up
        cumulativeUpDistance.current = 0;
        setHideMode("slide");
        setVisible(false);
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    });
  }, [visible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Don't render anything until the header has been activated at least once
  if (!activated && !visible) {
    return null;
  }

  const isFadeOut = !visible && hideMode === "fade";
  const isSlideOut = !visible && hideMode === "slide";

  // Build transition: visibility uses a delay so it stays visible during animation
  const visibilityTransition = visible
    ? "visibility 0s 0s"
    : isSlideOut
      ? "visibility 0s 400ms"
      : "visibility 0s 500ms";

  const mainTransition = isFadeOut
    ? "opacity 500ms ease-out"
    : "transform 400ms cubic-bezier(0.33, 1, 0.68, 1), opacity 300ms ease-in";

  return (
    <div
      className="fixed top-0 left-0 w-full z-[100] h-[112px]"
      style={{
        transform: isSlideOut ? "translateY(-100%)" : "translateY(0)",
        opacity: isFadeOut ? 0 : 1,
        visibility: visible ? "visible" : "hidden",
        transition: `${mainTransition}, ${visibilityTransition}`,
        willChange: "transform, opacity",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <Header />
    </div>
  );
}