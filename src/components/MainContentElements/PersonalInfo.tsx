import { useState } from 'react';
import {
  validatePersonalInfo,
  Warning,
  warningMessages,
} from '../../util/validate';
import { NextStepPersonalInfo } from '../Buttons/NextStepPersonalInfo';

export const PersonalInfo = () => {
  const definedWarnings = validatePersonalInfo();
  const [warnings, setWarnings] = useState<Warning[]>([]);
  return (
    <>
      <main className='main-content-container'>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <div>
          <div>
            <div className='input-label'>
              <label htmlFor='name'>Name</label>{' '}
              {warnings.some(warning => warning.inputName === 'name') ? (
                <div>
                  {
                    warnings.find(warning => warning.inputName === 'name')
                      ?.warningMessage
                  }
                </div>
              ) : null}
            </div>
            <input
              type='text'
              id='name'
              placeholder='e.g. Stephen King'
              onChange={e => {
                console.log(e.target.value);
              }}
            />
          </div>
          <div>
            <div className='input-label'>
              <label htmlFor='email'>Email Address</label>
              {warnings.some(warning => warning.inputName === 'email') ? (
                <div>
                  {
                    warnings.find(warning => warning.inputName === 'email')
                      ?.warningMessage
                  }
                </div>
              ) : null}
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
              {warnings.some(warning => warning.inputName === 'tel') ? (
                <div>
                  {
                    warnings.find(warning => warning.inputName === 'tel')
                      ?.warningMessage
                  }
                </div>
              ) : null}
            </div>
            <input type='tel' id='tel' placeholder='e.g. +1 234 567 890' />
          </div>
        </div>
      </main>
      <div className='buttons-container'>
        <NextStepPersonalInfo setWarnings={setWarnings} />
      </div>
    </>
  );
};
