import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext/GlobalContext';

interface StepElementProps {
  stepNumber: number;
  stepTitle: string;
  stepInfo: string;
}

export const StepElement: React.FC<StepElementProps> = ({
  stepNumber,
  stepTitle,
  stepInfo,
}) => {
  const { changeMainContentIndex } = useContext(GlobalContext);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    changeMainContentIndex(+target.id);
  };
  return (
    <div
      onClick={e => {
        handleClick(e);
      }}
      id={stepNumber.toString()}
      className='step-element'
    >
      <div className='step-element-number'>{stepNumber}</div>
      <div>
        <div className='step-element-title'>{stepTitle}</div>
        <div className='step-element-info'>{stepInfo}</div>
      </div>
    </div>
  );
};
