import { useState, useContext } from 'react';
import { GlobalContext } from '../../globalContext/GlobalContext';
import { plans } from '../../constants';

export const SelectPlan = () => {
  const { selectedPlan, setSelectedPlan } = useContext(GlobalContext);

  const [plansArray, setPlansArray] = useState(plans);
  const [isMonthly, setIsMonthly] = useState(true);
  const [activePlan, setActivePlan] = useState('');

  const toggleMonthlyYearly = () => {
    setIsMonthly(!isMonthly);

    setPlansArray(
      plansArray.map(plan => ({ ...plan, isChosenMonthly: !isMonthly }))
    );

    setSelectedPlan(prevPlan => ({
      ...prevPlan,
      isChosenMonthly: !prevPlan.isChosenMonthly,
    }));
  };

  return (
    <main className='main-content-container'>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div>
        <div className='select-plan-box-container'>
          {plansArray.map((item, index) => (
            <div
              className={`select-plan-box ${
                activePlan === item.planName ? 'active' : ''
              }`}
              key={index}
              onClick={() => {
                setSelectedPlan(item);
                setActivePlan(item.planName);
              }}
            >
              <div
                className='plan-icon'
                dangerouslySetInnerHTML={{ __html: item.image }}
              />
              <div>{item.planName}</div>
              <div>
                {item.isChosenMonthly
                  ? item.prices.monthlyPrice
                  : item.prices.yearlyPrice}
              </div>
              {!item.isChosenMonthly && (
                <div className='free'>2 months free</div>
              )}
            </div>
          ))}
        </div>
        <div className='select-plan-toggle'>
          <p>Monthly</p>
          <div
            className={`select-plan-toggle-button-container${
              isMonthly ? '' : ' isYearly'
            }`}
            onClick={() => {
              toggleMonthlyYearly();
            }}
          >
            <div className='select-plan-toggle-button'></div>
          </div>
          <p>Yearly</p>
        </div>
      </div>
    </main>
  );
};
