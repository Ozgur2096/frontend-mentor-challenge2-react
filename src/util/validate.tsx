// - Receive form validation messages if:
//   - A field has been missed
//   - The email address is not formatted correctly
//   - A step is submitted, but no selection has been made

// do not forget yup or zod

export type Warning = {
  inputName: string;
  warningType: string;
  warningMessage: string;
};

export const validatePersonalInfo = () => {
  let warningMessages: Warning[] = [
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
  return warningMessages;
};
