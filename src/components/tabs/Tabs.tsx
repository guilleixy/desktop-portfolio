"use client";
import { useTabs } from "./TabsContext";
import clsx from "clsx";

export function TabList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={clsx(className)}>{children}</div>;
}

export function Tab({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { activeTab, setActiveTab } = useTabs();

  const isActive = activeTab === id;

  return (
    <button
      onClick={() => setActiveTab(id)}
      //   className={`px-4 py-2 ${
      //     isActive ? "bg-blue-500 text-white" : "bg-gray-200"
      //   }`}
      className={clsx(className)}
    >
      {children}
    </button>
  );
}

export function TabPanel({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { activeTab } = useTabs();

  if (activeTab !== id) return null;
  return <div className={clsx(className)}>{children}</div>;
}
