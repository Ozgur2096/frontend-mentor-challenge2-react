// - Receive form validation messages if:
//   - A field has been missed
//   - The email address is not formatted correctly
//   - A step is submitted, but no selection has been made

export type Warning = {
  inputName: string;
  warningType: string;
  warningMessage: string;
};

export const warningMessages: Warning[] = [
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
];

export const validatePersonalInfo = (inputName: string, inputValue: string) => {
  // let messages: Warning[] = [];
  // messages = [...warningMessages];
  console.log(inputName, inputValue);
  console.log(warningMessages);
  if (inputValue.length > 0) {
    const warningIndex = warningMessages.findIndex(
      warning => warning.inputName === inputName
    );
    warningMessages.splice(warningIndex, 1);
  }
  if (inputValue.length < 1) {
    warningMessages.push({
      inputName,
      warningType: 'empty-field',
      warningMessage: 'This field is required',
    });
  }
  return warningMessages;
};

// TODO: warningMessages should be global context
