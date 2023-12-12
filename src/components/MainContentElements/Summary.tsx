import { useContext } from 'react';
import { GlobalContext } from '../../globalContext/GlobalContext';
import { GoBack } from '../Buttons/GoBack';
import { Confirm } from '../Buttons/Confirm';

export const Summary = () => {
  const { selectedPlan } = useContext(GlobalContext);
  console.log(selectedPlan);
  return (
    <>
      <main className='main-content-container'>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        <div>
          <div className='main-price'>
            <div>{selectedPlan.planName}</div>
            <div>
              {selectedPlan.isChosenMonthly
                ? selectedPlan.prices.monthlyPrice
                : selectedPlan.prices.yearlyPrice}
            </div>
          </div>
          <div className='extra-price'></div>
        </div>
        <div className='total-price'>
          <div>Total (per month)</div>
        </div>
      </main>
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
        <Confirm />
      </div>
    </>
  );
};
