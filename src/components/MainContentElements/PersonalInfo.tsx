import { useState } from 'react';

export const PersonalInfo = () => {
  const [warning, setWarning] = useState(false);
  return (
    <main className='main-content-container'>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <div>
        <div>
          <div className='input-label'>
            <label htmlFor='name'>Name</label>{' '}
            {warning && <div className='warning'>This field is required</div>}
          </div>
          <input type='text' id='name' placeholder='e.g. Stephen King' />
        </div>
        <div>
          <div className='input-label'>
            <label htmlFor='email'>Email Address</label>
            {warning && <div className='warning'>This field is required</div>}
          </div>
          <input
            type='email'
            id='email'
            placeholder='e.g. stephenking@lorem.com'
          />
        </div>
        <div>
          <div className='input-label'>
            <label htmlFor='tel'>Phone Number</label>
            {warning && <div className='warning'>This field is required</div>}
          </div>
          <input type='tel' id='tel' placeholder='e.g. +1 234 567 890' />
        </div>
      </div>
    </main>
  );
};
