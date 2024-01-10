import React, { useContext } from 'react';
import { GoBack } from '../Buttons/GoBack';
import { NextStep } from '../Buttons/NextStep';
import { extraServices } from '../../constants';
import { GlobalContext } from '../../globalContext/GlobalContext';

export const AddOns = () => {
  const { isMonthly } = useContext(GlobalContext);
  return (
    <>
      <main className='main-content-container'>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        <div>
          {extraServices.map((service, index) => (
            <div key={index} className='service-box'>
              <div>
                <div>{service.serviceName}</div>
                <div>{service.infoText}</div>
              </div>
              <div>
                {isMonthly
                  ? `+$${service.prices.monthlyPrice}/mo`
                  : `+$${service.prices.yearlyPrice}/yr`}
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className='buttons-container'>
        <GoBack />
        <NextStep />
      </div>
    </>
  );
};
