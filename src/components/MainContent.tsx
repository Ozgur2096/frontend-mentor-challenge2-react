import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext/GlobalContext';
import { PersonalInfo } from './MainContentElements/PersonalInfo';
import { SelectPlan } from './MainContentElements/SelectPlan';
import { AddOns } from './MainContentElements/AddOns';
import { Summary } from './MainContentElements/Summary';

export const MainContent = () => {
  const { mainContentIndex } = useContext(GlobalContext);
  return (
    <div>
      <main className='main-content-container'>
        {mainContentIndex === 1 && <PersonalInfo />}
        {mainContentIndex === 2 && <SelectPlan />}
        {mainContentIndex === 3 && <AddOns />}
        {mainContentIndex === 4 && <Summary />}
      </main>
      <div className='buttons-container'></div>
    </div>
  );
};
