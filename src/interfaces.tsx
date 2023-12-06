export interface Plan {
  isChosenMonthly: boolean;
  prices: { monthlyPrice: number; yearlyPrice: number };
}
