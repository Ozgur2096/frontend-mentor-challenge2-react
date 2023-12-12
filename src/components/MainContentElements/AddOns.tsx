import React from 'react';
import { GoBack } from '../Buttons/GoBack';
import { NextStep } from '../Buttons/NextStep';

export const AddOns = () => {
  return (
    <>
      <main className='main-content-container'>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        <div>
          <div>Online service Access to multiplayer games +$1/mo</div>
          <div>Larger storage Extra 1TB of cloud save +$2/mo</div>
          <div>Customizable Profile Custom theme on your profile +$2/mo</div>
        </div>
      </main>
      <div className='buttons-container'>
        <GoBack />
        <NextStep />
      </div>
    </>
  );
};
