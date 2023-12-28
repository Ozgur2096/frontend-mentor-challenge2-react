export interface Plan {
  planName: string;
  isChosenMonthly: boolean;
  prices: { monthlyPrice: number; yearlyPrice: number };
}

export type Warning = {
  inputName: string;
  warningType: string;
  warningMessage: string;
};
