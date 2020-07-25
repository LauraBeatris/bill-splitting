import { Bill } from "src/fixtures/bills";

export interface BillContextActions {
  handleSearch: (searchText: string) => void;
}

export type BillsContextPayload = [Bill[], BillContextActions]
