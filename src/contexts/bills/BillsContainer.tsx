import React, { useState, useMemo, useCallback } from "react";

import initialBills from "../../fixtures/bills";
import { BillsProvider } from "./BillsContext";

const UserBillsContainer: React.FC = ({ children }) => {
  const [bills, setBills] = useState(initialBills);

  const handleSearch = useCallback((searchText: string) => {
    setBills(initialBills.filter(bill => bill.name.match(searchText)));
  }, []);

  const payload = useMemo(() => [
    bills,
    {
      handleSearch,
    },
  ], [
    bills,
    handleSearch,
  ]);

  return (
    <BillsProvider value={payload}>
      {children}
    </BillsProvider>
  );
};

export default UserBillsContainer;
