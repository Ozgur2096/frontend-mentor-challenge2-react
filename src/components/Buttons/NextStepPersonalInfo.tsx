import { useContext } from 'react';
import { GlobalContext } from '../../globalContext/GlobalContext';
import { validatePersonalInfo } from '../../util/validate';

export const NextStepPersonalInfo = () => {
  const warnings = validatePersonalInfo();

  const { mainContentIndex, changeMainContentIndex } =
    useContext(GlobalContext);

  const clickNextStep = () => {
    changeMainContentIndex(mainContentIndex + 1);
  };
  return (
    <button
      onClick={() => {
        if (warnings.length === 0) {
          clickNextStep();
        }
      }}
    >
      NextStep
    </button>
  );
};
