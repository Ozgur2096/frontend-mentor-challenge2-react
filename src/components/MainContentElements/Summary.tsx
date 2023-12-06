import { useContext } from 'react';
import { GlobalContext } from '../../globalContext/GlobalContext';

export const Summary = () => {
  const { plan } = useContext(GlobalContext);
  return (
    <main className='main-content-container'>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div>
        <div className='main-price'>
          {plan.isChosenMonthly
            ? plan.prices.monthlyPrice
            : plan.prices.yearlyPrice}
        </div>
        <div className='extra-price'></div>
      </div>
      <div className='total-price'>
        <div>Total (per month)</div>
      </div>
    </main>
  );
};
