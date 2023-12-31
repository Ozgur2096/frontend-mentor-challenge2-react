// - Receive form validation messages if:
//   - A field has been missed
//   - The email address is not formatted correctly
//   - A step is submitted, but no selection has been made
import { Warning } from '../interfaces';

export const validatePersonalInfo = (
  warningMessages: Warning[],
  inputName: string
) => {
  if (warningMessages.some(warning => warning.inputName === inputName)) {
    return warningMessages.find(warning => warning.inputName === inputName)!
      .warningMessage;
  } else {
    return false;
  }
};

export const isEmail = (input: string) => {
  // Regular expression pattern to match an email address
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the input matches the email pattern
  return emailPattern.test(input);
};
