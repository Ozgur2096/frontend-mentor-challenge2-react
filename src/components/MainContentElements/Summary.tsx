import { useContext } from 'react';
import { GlobalContext } from '../../globalContext/GlobalContext';

export const Summary = () => {
  const { selectedPlan } = useContext(GlobalContext);
  console.log(selectedPlan);
  return (
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
  );
};
