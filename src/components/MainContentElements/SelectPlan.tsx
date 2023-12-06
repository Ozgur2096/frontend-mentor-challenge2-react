import { useContext } from 'react';
import { GlobalContext } from '../../globalContext/GlobalContext';
import { arcade, advanced, pro } from '../../constants';

export const SelectPlan = () => {
  const { setPlan } = useContext(GlobalContext);

  // const handleClickPlan = () => {};
  return (
    <main className='main-content-container'>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div>
        <div className='select-plan-box-container'>
          <div
            className='select-plan-box'
            onClick={() => {
              setPlan(arcade);
            }}
          >
            <div className='arcade-image'></div>
            <div>Arcade</div>
          </div>
          <div
            className='select-plan-box'
            onClick={() => {
              setPlan(advanced);
            }}
          >
            <div className='advanced-image'></div>
            <div>Advanced</div>
          </div>
          <div
            className='select-plan-box'
            onClick={() => {
              setPlan(pro);
            }}
          >
            <div className='pro-image'></div>
            <div>Pro</div>
          </div>
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
