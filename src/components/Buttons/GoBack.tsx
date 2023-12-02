import { useContext } from 'react';
import { GlobalContext } from '../../globalContext/GlobalContext';

export const GoBack = () => {
  const { mainContentIndex, changeMainContentIndex } =
    useContext(GlobalContext);

  const clickGoBack = () => {
    changeMainContentIndex(mainContentIndex - 1);
  };
  return (
    <button
      onClick={() => {
        clickGoBack();
      }}
    >
      GoBack
    </button>
  );
};
