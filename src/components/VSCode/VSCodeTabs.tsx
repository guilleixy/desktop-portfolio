"use client";

import { Tab, TabList } from "../tabs/Tabs";
import { useTabs } from "../tabs/TabsContext";
import PythonIconSVG from "./PythonIconSVG";
import ReactIconSVG from "./ReactIconSVG";
import RustIconSVG from "./RustIconSVG";

export default function VSCodeLeftTabs() {
  const { activeTab } = useTabs();
  return (
    <TabList className="flex flex-col items-start h-full border-l border-vscode-light-grey">
      <div className="px-4 py-2">
        <span className="text-xs">EXPLORER</span>
      </div>
      <div className="font-bold pl-4">DESKTOP-PORTFOLIO</div>
      <div className="text-zinc-300 overflow-y-scroll pl-4">
        <div className="text-zinc-400">.next</div>
        <div className="text-zinc-400">node_modules</div>
        <div>public</div>
        <div className="ml-2">images</div>
        <div className="ml-4">do_not_open.png</div>
        <div>src</div>
        <div className="ml-2">app</div>
        <div className="ml-2">components</div>
        <div className="ml-4">shared</div>
        <div className="ml-4">Spotify</div>
        <div className="ml-4">VSCode</div>
        <VSCodeTab title="TechStack.tsx" id="react" activeTab={activeTab}>
          <ReactIconSVG />
        </VSCodeTab>
        <VSCodeTab title="ai.py" id="python" activeTab={activeTab}>
          <PythonIconSVG />
        </VSCodeTab>
        <VSCodeTab title="rust.rs" id="rust" activeTab={activeTab}>
          <RustIconSVG />
        </VSCodeTab>
        <div>VSCodeLayout.tsx</div>
        <div>lib</div>
        <div className="text-zinc-400">.env</div>
        <div>.gitignore</div>
        <div>next.config.js</div>
        <div>package.json</div>
        <div>postcss.config.js</div>
        <div>README.md</div>
      </div>
    </TabList>
  );
}

export function VSCodeTopTabs() {
  const { activeTab } = useTabs();
  return (
    <TabList className="flex">
      <Tab
        id="react"
        className={`flex items-center gap-1 text-zinc-400 cursor-pointer px-4 py-2 hover:bg-vscode-medium-grey border-r-1 border-solid border-vscode-hover-grey ${
          activeTab === "react"
            ? "bg-vscode-medium-grey border-b-0 border-t-1 border-t-vscode-blue"
            : "border-b-1"
        }`}
      >
        <ReactIconSVG />
        TechStack.tsx
      </Tab>
      <Tab
        id="python"
        className={`flex items-center gap-1 text-zinc-400 cursor-pointer px-4 py-2 hover:bg-vscode-medium-grey border-r-1 border-solid border-vscode-hover-grey ${
          activeTab === "python"
            ? "bg-vscode-medium-grey border-b-0 border-t-1 border-t-vscode-blue"
            : "border-b-1"
        }`}
      >
        <PythonIconSVG />
        ai.py
      </Tab>
      <Tab
        id="rust"
        className={`flex items-center gap-1 text-zinc-400 cursor-pointer px-4 py-2 hover:bg-vscode-medium-grey border-r-1 border-solid border-vscode-hover-grey ${
          activeTab === "rust"
            ? "bg-vscode-medium-grey border-b-0 border-t-1 border-t-vscode-blue"
            : "border-b-1"
        }`}
      >
        <RustIconSVG />
        code.rs
      </Tab>
      <div className="w-full border-b-1 border-vscode-hover-grey"></div>
    </TabList>
  );
}

export function VSCodeTab({
  title,
  id,
  activeTab,
  children,
}: {
  title: string;
  id: string;
  activeTab: string | null;
  children?: React.ReactNode;
}) {
  return (
    <Tab
      className={`w-full text-left cursor-pointer hover:bg-vscode-hover-grey px-2 flex items-center gap-1 text-zinc-300 ${
        activeTab === id ? "bg-vscode-light-grey" : ""
      }`}
      id={id}
    >
      {children}
      {title}
    </Tab>
  );
}
