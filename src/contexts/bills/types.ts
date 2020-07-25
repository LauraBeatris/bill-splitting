import { Bill } from "src/fixtures/bills";

export type BillsContextPayload = (Bill[] | {
  handleSearch: (searchText: string) => void;
})[]
