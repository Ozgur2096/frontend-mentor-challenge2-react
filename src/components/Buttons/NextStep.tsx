import { useContext } from 'react';
import { GlobalContext } from '../../globalContext/GlobalContext';

export const NextStep = () => {
  const { mainContentIndex, changeMainContentIndex } =
    useContext(GlobalContext);

  const clickNextStep = () => {
    changeMainContentIndex(mainContentIndex + 1);
  };
  return (
    <button
      onClick={() => {
        clickNextStep();
      }}
    >
      NextStep
    </button>
  );
};
