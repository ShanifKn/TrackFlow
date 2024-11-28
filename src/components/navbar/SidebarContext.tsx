"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the types for the context's state and methods
interface SidebarContextType {
  isCompact: boolean;
  toggleSidebar: () => void;
}

// Create a context with a default value
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Custom hook to use the Sidebar context
export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// SidebarProvider component
interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isCompact, setIsCompact] = useState<boolean>(false);

  const toggleSidebar = () => setIsCompact((prev) => !prev);

  return <SidebarContext.Provider value={{ isCompact, toggleSidebar }}>{children}</SidebarContext.Provider>;
};
