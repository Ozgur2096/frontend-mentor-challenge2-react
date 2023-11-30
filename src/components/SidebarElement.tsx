import React from 'react';

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
  return (
    <div className='step-element'>
      <div className='step-element-number'>{stepNumber}</div>
      <div>
        <div className='step-element-title'>{stepTitle}</div>
        <div className='step-element-info'>{stepInfo}</div>
      </div>
    </div>
  );
};
