import { Bill } from "src/fixtures/bills";

export interface PaidBill {
  id: number;
  value: number;
}

export type BillsContextPayload = {
  bills: Bill[];
  payBill: (args: PaidBill) => void;
  paidAmount: number;
  totalOutcome: number;
  updateBillValue: number;
  handleSearch: (searchText: string) => void;
}
