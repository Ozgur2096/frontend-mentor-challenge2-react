import React from 'react';
import { PersonalInfo } from './MainContentElements/PersonalInfo';
import { SelectPlan } from './MainContentElements/SelectPlan';
import { AddOns } from './MainContentElements/AddOns';
import { Summary } from './MainContentElements/Summary';

export const MainContent = () => {
  return (
    <div>
      <main className='main-content-container'></main>
      <div className='buttons-container'></div>
    </div>
  );
};
