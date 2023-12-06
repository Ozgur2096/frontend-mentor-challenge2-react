import { useContext } from 'react';
import { GlobalContext } from '../../globalContext/GlobalContext';
import { plans } from '../../constants';

export const SelectPlan = () => {
  const { setPlan, plan } = useContext(GlobalContext);

  const toggleMonthlyYearly = () => {
    setPlan(prevPlan => {
      return { ...prevPlan, isChosenMonthly: !prevPlan.isChosenMonthly };
    });
  };

  return (
    <main className='main-content-container'>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div>
        <div className='select-plan-box-container'>
          {plans.map((item, index) => (
            <div
              className='select-plan-box'
              key={index}
              onClick={() => {
                setPlan(item);
              }}
            >
              <div
                className='plan-icon'
                dangerouslySetInnerHTML={{ __html: item.image }}
              />
              <div>{item.planName}</div>
            </div>
          ))}
        </div>
        <div className='select-plan-toggle'>
          <p>Monthly</p>
          <div
            className={`select-plan-toggle-button-container${
              plan.isChosenMonthly ? '' : ' isYearly'
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
