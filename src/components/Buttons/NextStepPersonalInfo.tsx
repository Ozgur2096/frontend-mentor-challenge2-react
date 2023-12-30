import React, { useContext } from 'react';
import { GlobalContext } from '../../globalContext/GlobalContext';
import { Warning } from '../../interfaces';

interface NextStepPersonalInfoProps {
  setWarnings: React.Dispatch<React.SetStateAction<Warning[]>>;
}

export const NextStepPersonalInfo: React.FC<NextStepPersonalInfoProps> = ({
  setWarnings,
}) => {
  const {
    mainContentIndex,
    changeMainContentIndex,
    warningMessages,
    setWarningMessages,
  } = useContext(GlobalContext);

  const clickNextStep = () => {
    changeMainContentIndex(mainContentIndex + 1);
  };
  return (
    <button
      onClick={() => {
        console.log(warningMessages);
        setWarnings(warningMessages);
        if (warningMessages.length === 0) {
          clickNextStep();
          setWarningMessages([
            {
              inputName: 'name',
              warningType: 'empty-field',
              warningMessage: 'This field is required',
            },
            {
              inputName: 'email',
              warningType: 'empty-field',
              warningMessage: 'This field is required',
            },
            {
              inputName: 'tel',
              warningType: 'empty-field',
              warningMessage: 'This field is required',
            },
          ]);
        }
      }}
    >
      NextStep
    </button>
  );
};
