import React, { useState, createContext, ReactNode } from 'react';
import { Plan } from '../interfaces';

// Interfaces
interface ContextValue {
  mainContentIndex: number;
  changeMainContentIndex: (n: number) => void;
  plan: Plan;
  setPlan: React.Dispatch<React.SetStateAction<Plan>>;
}
interface GlobalContextProps {
  children: ReactNode;
}
// create context
export const GlobalContext = createContext<ContextValue>({
  mainContentIndex: 1,
  changeMainContentIndex: (newIndex: number) => {},
  plan: {
    isChosenMonthly: true,
    prices: {
      monthlyPrice: 0,
      yearlyPrice: 0,
    },
  },
  setPlan: () => {},
});

export const GlobalContextProvider: React.FC<GlobalContextProps> = ({
  children,
}) => {
  const [mainContentIndex, setMainContentIndex] = useState(1);
  const [plan, setPlan] = useState({
    isChosenMonthly: true,
    prices: {
      monthlyPrice: 0,
      yearlyPrice: 0,
    },
  });

  const changeMainContentIndex = (newIndex: number) => {
    setMainContentIndex(newIndex);
  };

  const contextValue: ContextValue = {
    mainContentIndex,
    changeMainContentIndex,
    plan,
    setPlan,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
