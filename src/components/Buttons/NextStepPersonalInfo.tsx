import React, { useContext } from 'react';
import { GlobalContext } from '../../globalContext/GlobalContext';
import { Warning } from '../../util/validate';
import { validatePersonalInfo } from '../../util/validate';

interface NextStepPersonalInfoProps {
  setWarnings: React.Dispatch<React.SetStateAction<Warning[]>>;
}

export const NextStepPersonalInfo: React.FC<NextStepPersonalInfoProps> = ({
  setWarnings,
}) => {
  const warnings = validatePersonalInfo();

  const { mainContentIndex, changeMainContentIndex } =
    useContext(GlobalContext);

  const clickNextStep = () => {
    changeMainContentIndex(mainContentIndex + 1);
  };
  return (
    <button
      onClick={() => {
        setWarnings(warnings);
        if (warnings.length === 0) {
          clickNextStep();
        }
      }}
    >
      NextStep
    </button>
  );
};
