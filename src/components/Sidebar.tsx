import React from 'react';
import { StepElement } from './SidebarElement';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <StepElement stepNumber={1} stepTitle='STEP 1' stepInfo='YOUR INFO' />
      <StepElement stepNumber={2} stepTitle='STEP 2' stepInfo='SELECT PLAN' />
      <StepElement stepNumber={3} stepTitle='STEP 3' stepInfo='ADD-ONS' />
      <StepElement stepNumber={4} stepTitle='STEP 4' stepInfo='SUMMARY' />
    </div>
  );
};
