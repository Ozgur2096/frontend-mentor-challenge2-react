import React from 'react';

export const Summary = () => {
  return (
    <main className='main-content-container'>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div>
        <div className='main-price'></div>
        <div className='extra-price'></div>
      </div>
      <div className='total-price'>
        <div>Total (per month)</div>
      </div>
    </main>
  );
};
