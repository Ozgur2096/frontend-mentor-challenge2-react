import React, { useState, createContext, ReactNode } from 'react';
import { Plan } from '../interfaces';

// Interfaces
interface ContextValue {
  mainContentIndex: number;
  changeMainContentIndex: (n: number) => void;
  selectedPlan: Plan;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
}
interface GlobalContextProps {
  children: ReactNode;
}
// create context
export const GlobalContext = createContext<ContextValue>({
  mainContentIndex: 1,
  changeMainContentIndex: (newIndex: number) => {},
  selectedPlan: {
    planName: '',
    isChosenMonthly: true,
    prices: {
      monthlyPrice: 0,
      yearlyPrice: 0,
    },
  },
  setSelectedPlan: () => {},
});

export const GlobalContextProvider: React.FC<GlobalContextProps> = ({
  children,
}) => {
  const [mainContentIndex, setMainContentIndex] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState({
    planName: '',
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
    selectedPlan,
    setSelectedPlan,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
