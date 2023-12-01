import React, { useState, createContext, ReactNode } from 'react';

// Interfaces
interface ContextValue {
  mainContent: number;
  changeMainContent: () => void;
}
interface GlobalContextProps {
  children: ReactNode;
}
// create context
const GlobalContext = createContext<ContextValue>({
  mainContent: 1,
  changeMainContent: () => {},
});

export const GlobalContextProvider: React.FC<GlobalContextProps> = ({
  children,
}) => {
  const [mainContent, setMainContent] = useState(1);

  const changeMainContent = () => {};

  const contextValue: ContextValue = {
    mainContent,
    changeMainContent,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
