"use client";

import { createContext, useContext, useState } from "react";

export interface TabsContextType {
  activeTab: string | null;
  setActiveTab: (tabId: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function TabsProvider({
  children,
  defaultTab,
}: {
  children: React.ReactNode;
  defaultTab?: string;
}) {
  const [activeTab, setActiveTab] = useState<string | null>(defaultTab || null);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

export function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      "No context found for Tabs. Please wrap your component in <TabsProvider>."
    );
  }
  return context;
}
