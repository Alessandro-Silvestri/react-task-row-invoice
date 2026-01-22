import { useState } from "react";
import "./App.css";
import RowInvoice from "./components/RowInvoice";
import HeaderInvoiceTable from "./HeaderInvoiceTable";
import RowsWrapper from "./components/RowsWrapper";

function App() {
  // const [RowInvoiceObjArray, setRowInvoiceObjArray] = useState([]);
  // const [total, setTotal] = useState(0);

  return (
    <>
      <HeaderInvoiceTable />
      <RowsWrapper>
        <RowInvoice item={1} description="ananas" quantity={2} unitCost={12} />
        <RowInvoice item={2} description="apple" quantity={3} unitCost={10} />
        <RowInvoice item={3} description="carrots" quantity={5} unitCost={3} />
        <RowInvoice item={4} description="vegetable" quantity={3} unitCost={4} />
        <RowInvoice item={5} description="pears" quantity={7} unitCost={2} />
      </RowsWrapper>
    </>
  );
}

export default App;
