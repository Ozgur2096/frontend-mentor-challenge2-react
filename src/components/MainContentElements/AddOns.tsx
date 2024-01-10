import React, { useState } from 'react';
import { GoBack } from '../Buttons/GoBack';
import { NextStep } from '../Buttons/NextStep';
import { extraServices } from '../../constants';

export const AddOns = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <>
      <main className='main-content-container'>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        <div>
          <div>
            Online service Access to multiplayer games <div>+$1/mo</div>
          </div>
          <div>
            Larger storage Extra 1TB of cloud save <div>+$2/mo</div>
          </div>
          <div>
            Customizable Profile Custom theme on your profile <div>+$2/mo</div>
          </div>
        </div>
      </main>
      <div className='buttons-container'>
        <GoBack />
        <NextStep />
      </div>
    </>
  );
};
