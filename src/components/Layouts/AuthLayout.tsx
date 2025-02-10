"use client";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className=" w-full max-w-5xl" style={{ transform: "scale(0.8)" }}>
        {children}
      </div>
    </div>
  );
}
