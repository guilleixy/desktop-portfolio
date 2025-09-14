"use client";

import { TabPanel } from "../tabs/Tabs";
import { TabsProvider } from "../tabs/TabsContext";
import VSCodeLeftTabs, { VSCodeTopTabs } from "./VSCodeTabs";
import VSCodeWindow from "./VSCodeWindow";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Tab1Lines = [
  <div className="ml-2 text-vscode-text-pink">
    import <span className="text-vscode-text-dark-yellow">&#123;</span>
    <span className="text-vscode-text-blue"> nextjs </span>
    <span className="text-vscode-text-dark-yellow">&#125;</span> from
    <span className="text-vscode-orange"> "./nextjs"</span>
  </div>,
  <div className="ml-2 text-vscode-text-pink">
    import <span className="text-vscode-text-dark-yellow">&#123;</span>
    <span className="text-vscode-text-blue"> MongoDB </span>
    <span className="text-vscode-text-dark-yellow">&#125;</span> from
    <span className="text-vscode-orange"> "./mongodb"</span>
  </div>,
  <div className="ml-2 text-vscode-text-pink">
    import <span className="text-vscode-text-dark-yellow">&#123;</span>
    <span className="text-vscode-text-blue"> threejs </span>
    <span className="text-vscode-text-dark-yellow">&#125;</span> from
    <span className="text-vscode-orange"> "./threejs"</span>
  </div>,
  <div className="ml-2 text-vscode-text-pink">
    import <span className="text-vscode-text-dark-yellow">&#123;</span>
    <span className="text-vscode-text-blue">
      {" "}
      Conmu, Saight, GroovePomodoro{" "}
    </span>
    <span className="text-vscode-text-dark-yellow">&#125;</span> from
    <span className="text-vscode-orange"> "./projects"</span>
  </div>,
  <div></div>,
  <div className="ml-2 text-vscode-text-pink">
    export default <span className="text-vscode-dark-blue">function </span>
    <span className="text-vscode-text-yellow">TechStack</span>
    <span className="text-vscode-text-dark-yellow">()&#123;</span>
  </div>,
  <div className="ml-10 text-vscode-text-pink">
    return <span className="text-vscode-text-dark-pink">(</span>
  </div>,
  <div className="ml-18 text-vscode-text-grey">
    &lt;<span className="text-vscode-dark-blue">div</span>&gt;
  </div>,
  <div className="ml-26 text-vscode-text-grey">
    &lt;<span className="text-vscode-dark-blue">p</span>&gt;
  </div>,
  <div className="ml-32 ">
    A a <span className="text-vscode-dark-blue">&#123;</span>
    <span className="text-vscode-text-blue">SoftwareDeveloper</span>
    <span className="text-vscode-dark-blue">&#125;</span>, i have hands-on
    experience
  </div>,
  <div className="ml-32">
    in a wide range of front-end and back-end technogies
  </div>,
  <div className="ml-26 text-vscode-text-grey">
    &lt;/<span className="text-vscode-dark-blue">p</span>&gt;
  </div>,
  <div className="ml-26 text-vscode-text-grey">
    &lt;<span className="text-vscode-dark-blue">p</span>&gt;
  </div>,
  <div className="ml-32 ">These are my favorite technologies:</div>,
  <div className="ml-26 text-vscode-text-grey">
    &lt;/<span className="text-vscode-dark-blue">p</span>&gt;
  </div>,
  <div className="ml-26 text-vscode-text-grey">
    &lt;<span className="text-vscode-dark-blue">ul</span>&gt;
  </div>,
  <div className="ml-32 text-vscode-text-grey">
    &lt;<span className="text-vscode-dark-blue">li</span>&gt;
    <span>
      &lt;<span className="text-vscode-green">NextJS </span>/&gt;
    </span>
    &lt;/
    <span className="text-vscode-dark-blue">li</span>&gt;
  </div>,
  <div className="ml-32 text-vscode-text-grey">
    &lt;<span className="text-vscode-dark-blue">li</span>&gt;
    <span>
      &lt;<span className="text-vscode-green">Three.js </span>/&gt;
    </span>
    &lt;/
    <span className="text-vscode-dark-blue">li</span>&gt;
  </div>,
  <div className="ml-32 text-vscode-text-grey">
    &lt;<span className="text-vscode-dark-blue">li</span>&gt;
    <span>
      &lt;<span className="text-vscode-green">MongoDB </span>/&gt;
    </span>
    &lt;/
    <span className="text-vscode-dark-blue">li</span>&gt;
  </div>,
  <div className="ml-32 text-vscode-text-grey">
    &lt;<span className="text-vscode-dark-blue">li</span>&gt;
    <span className="text-white">
      (here´s the full list if u wanna check it out)
    </span>
    &lt;/
    <span className="text-vscode-dark-blue">li</span>&gt;
  </div>,
  <div className="ml-26 text-vscode-text-grey">
    &lt;/<span className="text-vscode-dark-blue">ul</span>&gt;
  </div>,
  <div className="ml-26 text-vscode-text-grey">
    &lt;<span className="text-vscode-dark-blue">p</span>&gt;
  </div>,
  <div className="ml-32 ">
    And here's a cool project I'm making in react native!
  </div>,
  <div className="ml-26 text-vscode-text-grey">
    &lt;/<span className="text-vscode-dark-blue">p</span>&gt;
  </div>,
  <div className="ml-26 text-vscode-text-grey">
    &lt;<span className="text-vscode-green">Conmu onClick=...</span>&gt;
  </div>,
  <div className="ml-32 ">These are my favorite technologies:</div>,
  <div className="ml-26 text-vscode-text-grey">
    &lt;/<span className="text-vscode-green">Conmu</span>&gt;
  </div>,
  <div className="ml-18 text-vscode-text-grey">
    &lt;/<span className="text-vscode-dark-blue">div</span>&gt;
  </div>,
  <div className="ml-10 text-vscode-text-dark-pink">)</div>,
  <div className="ml-2 text-vscode-text-dark-yellow">&#125;</div>,
];

const Tab2Lines = [
  <div className="text-vscode-text-yellow ml-2">
    <span className="text-vscode-dark-blue">def</span> my_ai_background
    <span className="text-vscode-text-dark-yellow">()</span>
    <span>:</span>
  </div>,
  <div className="text-vscode-text-yellow ml-10">
    print<span className="text-vscode-text-dark-yellow">(</span>
    <span className="text-vscode-orange">'I also have '</span>
    <span className="text-vscode-text-dark-yellow">)</span>
  </div>,
];

const Tab3Lines = [
  <div className="text-vscode-text-yellow ml-2">
    <span className="text-vscode-dark-blue">fn</span> my_code_journey
    <span className="text-vscode-text-dark-pink">() </span>
    <span className="text-vscode-text-dark-pink">&#123;</span>
  </div>,
  <div className="text-vscode-dark-blue ml-10">
    println!<span className="text-vscode-text-dark-pink">(</span>
    <span className="text-vscode-orange">
      "i focus on refining my programming skills on every level of abstraction"
    </span>
    <span className="text-vscode-text-dark-pink">)</span>
  </div>,
  <div className="text-vscode-dark-blue ml-10">
    println!<span className="text-vscode-text-dark-pink">(</span>
    <span className="text-vscode-orange">
      "to write clean and maintainable code"
    </span>
    <span className="text-vscode-text-dark-pink">)</span>
  </div>,
  <div className="text-vscode-dark-blue ml-10">
    println!<span className="text-vscode-text-dark-pink">(</span>
    <span className="text-vscode-orange">"i am currently learning rust!"</span>
    <span className="text-vscode-text-dark-pink">)</span>
  </div>,
  <div className="text-vscode-dark-blue ml-10">
    println!<span className="text-vscode-text-dark-pink">(</span>
    <span className="text-vscode-orange">
      "and if there is a hackathon soon, count me in!"
    </span>
    <span className="text-vscode-text-dark-pink">)</span>
  </div>,
  <div className="text-vscode-text-dark-pink ml-2">&#125;</div>,
];

export default function VSCodeLayout() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    gsap.set(containerRef.current, {
      scaleX: 0,
      scaleY: 0,
      transformOrigin: "center center",
    });

    tl.to(containerRef.current, {
      scaleX: 1,
      duration: 0.6,
      ease: "power3.out",
    }).to(containerRef.current, {
      scaleY: 1,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[80dvh] w-[70dvw] border-[#343434] mt-10 ml-10 border rounded-lg font-vscode flex flex-col bg-vscode-dark-grey text-sm overflow-hidden"
    >
      <div className="flex-grow flex overflow-hidden">
        <div className="flex flex-col">iconos</div>
        <TabsProvider defaultTab="react">
          <VSCodeLeftTabs />
          <div className="w-full h-full">
            <VSCodeTopTabs />
            <div className="w-full h-full bg-vscode-medium-grey">
              <TabPanel className="grow-1" id="react">
                src &gt; components &gt; VSCode &gt; TechStack.tsx
                <VSCodeWindow lines={Tab1Lines} />
              </TabPanel>
              <TabPanel id="python">
                <VSCodeWindow lines={Tab2Lines} />
              </TabPanel>
              <TabPanel id="rust">
                <VSCodeWindow lines={Tab3Lines} />
              </TabPanel>
            </div>
          </div>
        </TabsProvider>
      </div>
    </div>
  );
}
