import { useState } from "react";
import "./App.css";
// import { Button } from "flowbite-react";
import RowInvoice from "./components/RowInvoice";
import HeaderInvoiceTable from "./HeaderInvoiceTable";
import TotalInvoice from "./components/TotalInvoice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderInvoiceTable />
      <RowInvoice
        item={1}
        description="photoshoot"
        quantity={2}
        unitCost={120}
      />
      <RowInvoice item={2} description="carrots" quantity={5} unitCost={5} />
      <TotalInvoice />
    </>
  );
}

export default App;
