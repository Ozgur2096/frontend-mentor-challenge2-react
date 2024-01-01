import { useState, useContext } from 'react';
import { isEmail, validatePersonalInfo } from '../../util/validate';
import { Warning } from '../../interfaces';
import { NextStepPersonalInfo } from '../Buttons/NextStepPersonalInfo';
import { GlobalContext } from '../../globalContext/GlobalContext';

export const PersonalInfo = () => {
  const { warningMessages, setWarningMessages } = useContext(GlobalContext);
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
              {validatePersonalInfo(warnings, 'name') ? (
                <div>{validatePersonalInfo(warnings, 'name')}</div>
              ) : null}
            </div>
            <input
              type='text'
              id='name'
              placeholder='e.g. Stephen King'
              onChange={e => {
                e.target.value.length > 0
                  ? setWarningMessages(
                      warningMessages.filter(
                        warning => warning.inputName !== 'name'
                      )
                    )
                  : setWarningMessages(prev => [
                      ...prev,
                      {
                        inputName: 'name',
                        warningType: 'empty-field',
                        warningMessage: 'This field is required',
                      },
                    ]);
              }}
            />
          </div>
          <div>
            <div className='input-label'>
              <label htmlFor='email'>Email Address</label>
              {validatePersonalInfo(warnings, 'email') ? (
                <div>{validatePersonalInfo(warnings, 'email')}</div>
              ) : null}
            </div>
            <input
              type='email'
              id='email'
              placeholder='e.g. stephenking@lorem.com'
              onChange={e => {
                e.target.value.length > 0
                  ? setWarningMessages(
                      warningMessages.filter(
                        warning => warning.inputName !== 'email'
                      )
                    )
                  : setWarningMessages(prev => [
                      ...prev,
                      {
                        inputName: 'email',
                        warningType: 'empty-field',
                        warningMessage: 'This field is required',
                      },
                    ]);
                if (!isEmail(e.target.value)) {
                  setWarningMessages(prev => [
                    ...prev,
                    {
                      inputName: 'email',
                      warningType: 'empty-field',
                      warningMessage: 'Invalid email address',
                    },
                  ]);
                }
              }}
            />
          </div>
          <div>
            <div className='input-label'>
              <label htmlFor='tel'>Phone Number</label>
              {validatePersonalInfo(warnings, 'tel') ? (
                <div>{validatePersonalInfo(warnings, 'tel')}</div>
              ) : null}
            </div>
            <input
              type='tel'
              id='tel'
              placeholder='e.g. +1 234 567 890'
              onChange={e => {
                e.target.value.length > 0
                  ? setWarningMessages(
                      warningMessages.filter(
                        warning => warning.inputName !== 'tel'
                      )
                    )
                  : setWarningMessages(prev => [
                      ...prev,
                      {
                        inputName: 'tel',
                        warningType: 'empty-field',
                        warningMessage: 'This field is required',
                      },
                    ]);
              }}
            />
          </div>
        </div>
      </main>
      <div className='buttons-container'>
        <NextStepPersonalInfo setWarnings={setWarnings} />
      </div>
    </>
  );
};
