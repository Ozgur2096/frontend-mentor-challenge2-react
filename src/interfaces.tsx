export interface Plan {
  planName: string;
  isChosenMonthly: boolean;
  prices: { monthlyPrice: number; yearlyPrice: number };
}
