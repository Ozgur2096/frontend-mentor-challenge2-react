import React, { useState, createContext, ReactNode } from 'react';

// Interfaces
interface ContextValue {
  mainContentIndex: number;
  changeMainContentIndex: (n: number) => void;
}
interface GlobalContextProps {
  children: ReactNode;
}
// create context
export const GlobalContext = createContext<ContextValue>({
  mainContentIndex: 1,
  changeMainContentIndex: (newIndex: number) => {},
});

export const GlobalContextProvider: React.FC<GlobalContextProps> = ({
  children,
}) => {
  const [mainContentIndex, setMainContentIndex] = useState(1);

  const changeMainContentIndex = (newIndex: number) => {
    setMainContentIndex(newIndex);
  };

  const contextValue: ContextValue = {
    mainContentIndex,
    changeMainContentIndex,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
