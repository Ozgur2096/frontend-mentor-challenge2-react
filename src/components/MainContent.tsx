import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext/GlobalContext';
import { PersonalInfo } from './MainContentElements/PersonalInfo';
import { SelectPlan } from './MainContentElements/SelectPlan';
import { AddOns } from './MainContentElements/AddOns';
import { Summary } from './MainContentElements/Summary';
import { ThankYou } from './MainContentElements/ThankYou';
import { NextStep } from './Buttons/NextStep';
import { GoBack } from './Buttons/GoBack';
import { Confirm } from './Buttons/Confirm';

export const MainContent = () => {
  const { mainContentIndex } = useContext(GlobalContext);
  return (
    <div className='content-container'>
      {mainContentIndex === 1 && <PersonalInfo />}
      {mainContentIndex === 2 && <SelectPlan />}
      {mainContentIndex === 3 && <AddOns />}
      {mainContentIndex === 4 && <Summary />}
      {mainContentIndex === 5 && <ThankYou />}

      {mainContentIndex !== 5 && (
        <div className='buttons-container'>
          {mainContentIndex !== 1 && <GoBack />}
          {mainContentIndex !== 4 && <NextStep />}
          {mainContentIndex === 4 && <Confirm />}
        </div>
      )}
    </div>
  );
};
