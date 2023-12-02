import React from 'react';

export const SelectPlan = () => {
  return (
    <main className='main-content-container'>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div>
        <div className='select-plan-box-container'>
          <div className='select-plan-box'>Arcade</div>
          <div className='select-plan-box'>Advanced</div>
          <div className='select-plan-box'>Pro</div>
        </div>
        <div className='select-plan-toggle'>
          <p>Monthly</p>
          <div className='select-plan-toggle-button'></div>
          <p>Yearly</p>
        </div>
      </div>
    </main>
  );
};
