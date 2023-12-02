import { useContext } from 'react';
import { GlobalContext } from '../../globalContext/GlobalContext';

export const Confirm = () => {
  const { mainContentIndex, changeMainContentIndex } =
    useContext(GlobalContext);

  const clickConfirm = () => {
    changeMainContentIndex(mainContentIndex + 1);
  };
  return (
    <button
      onClick={() => {
        clickConfirm();
      }}
    >
      Confirm
    </button>
  );
};
