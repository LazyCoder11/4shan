"use client";

import React, { createContext, useContext, useState } from 'react';

type AnimationContextType = {
  isHomePage: boolean;
  setIsHomePage: (value: boolean) => void;
};

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHomePage, setIsHomePage] = useState(false);

  return (
    <AnimationContext.Provider value={{ isHomePage, setIsHomePage }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};