import React, { useState, createContext, ReactNode } from 'react';
import { Plan, Warning } from '../interfaces';

// Interfaces
interface ContextValue {
  mainContentIndex: number;
  changeMainContentIndex: (n: number) => void;
  selectedPlan: Plan;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
  warningMessages: Warning[] | [];
  setWarningMessages: React.Dispatch<React.SetStateAction<Warning[]>>;
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
  warningMessages: [
    {
      inputName: 'name',
      warningType: 'empty-field',
      warningMessage: 'This field is required',
    },
    {
      inputName: 'email',
      warningType: 'empty-field',
      warningMessage: 'This field is required',
    },
    {
      inputName: 'tel',
      warningType: 'empty-field',
      warningMessage: 'This field is required',
    },
  ],
  setWarningMessages: () => {},
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
  const [warningMessages, setWarningMessages] = useState<Warning[]>([
    {
      inputName: 'name',
      warningType: 'empty-field',
      warningMessage: 'This field is required',
    },
    {
      inputName: 'email',
      warningType: 'empty-field',
      warningMessage: 'This field is required',
    },
    {
      inputName: 'tel',
      warningType: 'empty-field',
      warningMessage: 'This field is required',
    },
  ]);
  const changeMainContentIndex = (newIndex: number) => {
    setMainContentIndex(newIndex);
  };

  const contextValue: ContextValue = {
    mainContentIndex,
    changeMainContentIndex,
    selectedPlan,
    setSelectedPlan,
    warningMessages,
    setWarningMessages,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
