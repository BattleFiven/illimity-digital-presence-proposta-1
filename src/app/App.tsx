import { useEffect } from "react";
import Lenis from "lenis";
import Illimity from "../imports/Illimity";
import { ScrollHeader } from "./components/ScrollHeader";

export default function App() {
  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <ScrollHeader />
      <Illimity />
    </div>
  );
}