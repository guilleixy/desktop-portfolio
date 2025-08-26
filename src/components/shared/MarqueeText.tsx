"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  pxPerSecond?: number; // velocidad base (px/s)
};

export default function MarqueeText({
  children,
  className = "",
  pxPerSecond = 20,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(false);
  const [duration, setDuration] = useState(12);

  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;
      const isOverflow = content.scrollWidth > container.clientWidth + 1;
      setOverflow(isOverflow);

      if (isOverflow) {
        const d = (content.scrollWidth + container.clientWidth) / pxPerSecond;
        setDuration(Math.min(30, Math.max(8, d)));
      }
    };

    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    if (contentRef.current) ro.observe(contentRef.current);
    window.addEventListener("load", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("load", update);
    };
  }, [children, pxPerSecond]);

  return (
    <div ref={containerRef} className="marquee marquee--mask w-full group">
      <div
        className={`marquee__track ${className}`}
        style={
          overflow
            ? { ["--marquee-duration" as any]: `${duration}s` }
            : { animation: "none" as any }
        }
      >
        <div
          ref={contentRef}
          className="inline-block whitespace-nowrap pr-8 ml-2"
        >
          {children}
        </div>
        {overflow && (
          <div aria-hidden className="inline-block whitespace-nowrap pr-8">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
