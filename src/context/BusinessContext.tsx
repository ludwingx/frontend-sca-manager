"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Business = "mil-sabores" | "tortas-express";

interface BusinessContextType {
  business: Business;
  setBusiness: (business: Business) => void;
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

export const BusinessProvider = ({ children }: { children: ReactNode }) => {
  const [business, setBusiness] = useState<Business>("mil-sabores");

  return (
    <BusinessContext.Provider value={{ business, setBusiness }}>
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (!context) throw new Error("useBusiness must be used within BusinessProvider");
  return context;
};
