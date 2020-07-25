import React, { useState, useMemo, useCallback } from "react";
import update from "immutability-helper";

import initialBills from "../../fixtures/bills";
import { BillsContextPayload, PaidBill } from "./types";
import { BillsProvider } from "./BillsContext";

const BillsContainer: React.FC = ({ children }) => {
  const [bills, setBills] = useState(initialBills);
  const [paidBills, setPaidBills] = useState<PaidBill[]>([]);

  const handleSearch = useCallback((searchText: string) => {
    setBills(initialBills.filter(bill => (
      bill.user.name.match(searchText)
    )));
  }, []);

  const updateBillValue = useCallback(({ id, value }) => {
    const billIndex = bills.findIndex(bill => (
      bill.id === id
    ));

    if (billIndex > -1) {
      const updatedBills = update(bills, {
        [billIndex]: {
          $merge: {
            value,
          },
        },
      });

      setBills(updatedBills);
    }
  }, [bills]);

  const payBill = useCallback(({ id, value }) => {
    const billIndex = paidBills.findIndex(bill => (
      bill.id === id
    ));

    if (billIndex >= 0) {
      const updatedFields = update(paidBills, {
        $splice: [[billIndex, 1]],
      });

      setPaidBills(updatedFields);
    } else {
      setPaidBills(prev => [...prev, { id, value }]);
    }
  }, [
    paidBills,
  ]);

  const totalOutcome = useMemo(() => (
    bills.reduce((accumulator, bill) => (
      accumulator + bill.value
    ), 0)
  ), [bills]);

  const paidAmount = useMemo(() => (
    paidBills.reduce((accumulator, bill) => (
      accumulator + bill.value
    ), 0)
  ), [paidBills]);

  const payload = useMemo<BillsContextPayload>(() => ({
    bills,
    payBill,
    paidAmount,
    totalOutcome,
    handleSearch,
    updateBillValue,
  }), [
    bills,
    payBill,
    paidAmount,
    handleSearch,
    totalOutcome,
    updateBillValue,
  ]);

  return (
    <BillsProvider value={payload}>
      {children}
    </BillsProvider>
  );
};

export default BillsContainer;
