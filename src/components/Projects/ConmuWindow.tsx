"use client";

import { useEffect, useRef, useState } from "react";
import ChromeWindow from "../Chrome/ChromeWindow";
import Image from "next/image";

// simple linear interpolation
const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

export default function ConmuWindow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  // independent targets for each eye
  const [target1, setTarget1] = useState({ x: 0, y: 0 });
  const [target2, setTarget2] = useState({ x: 0, y: 0 });

  // smoothed positions for each eye
  const [eye1, setEye1] = useState({ x: 0, y: 0 });
  const [eye2, setEye2] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !circleRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = circleRef.current!.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      let dx = e.clientX - centerX;
      let dy = e.clientY - centerY;

      // constrain to circle radius - padding
      const radius = rect.width / 2 - 15;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > radius) {
        dx = (dx / distance) * radius;
        dy = (dy / distance) * radius;
      }

      // independent targets (slightly offset horizontally)
      setTarget1({ x: dx - 10, y: dy });
      setTarget2({ x: dx + 0, y: dy });
    };

    const handleMouseLeave = () => {
      // reset both eyes to center
      setTarget1({ x: 0, y: -10 });
      setTarget2({ x: 10, y: 8 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // animation loop for smooth independent lag
  useEffect(() => {
    let frame: number;

    const animate = () => {
      setEye1((prev) => ({
        x: lerp(prev.x, target1.x, 0.3), // faster response
        y: lerp(prev.y, target1.y, 0.3),
      }));

      setEye2((prev) => ({
        x: lerp(prev.x, target2.x, 0.16), // slower response
        y: lerp(prev.y, target2.y, 0.16),
      }));

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target1, target2]);

  return (
    <ChromeWindow title="Google" url="www.google.com" favicon="/favicon.ico">
      <div
        ref={containerRef}
        className="bg-black h-full flex p-5 font-helvetica flex-col"
      >
        <div>
          <Image
            src="assets/images/projects/conmu/conmu_logo.svg"
            alt="conmu logo"
            width={213}
            height={101}
          />
        </div>
        <div>
          <div>
            <p className="font-bold">
              Discover what people are listening around you!
            </p>
            <p>Interact with a live map where everyone shares </p>
          </div>
          <div>
            <div>
              <p className="font-bold">
                Get notified when you walked near someone with similar music
                taste!
              </p>
              <p>
                Sync with Spotify to import your favourite groups automatically
              </p>
            </div>
          </div>
          <div>
            <p>Everyones anonymous for extra safety!</p>
          </div>
          <div>
            <p>Built with React Native and Tailwind</p>
          </div>
        </div>
        {/* <div
          ref={circleRef}
          className="h-[100px] w-[100px] bg-[#3efd71] rounded-full relative"
        >
          <div
            className="h-[20px] w-[20px] bg-black rounded-full absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${eye1.x}px), calc(-50% + ${eye1.y}px))`,
            }}
          ></div>
          <div
            className="h-[20px] w-[20px] bg-black rounded-full absolute"
            style={{
              top: "30%",
              left: "65%",
              transform: `translate(calc(-50% + ${eye2.x}px), calc(-50% + ${eye2.y}px))`,
            }}
          ></div>
        </div> */}
      </div>
    </ChromeWindow>
  );
}
