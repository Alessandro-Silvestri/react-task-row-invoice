import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { Button } from "flowbite-react";
import RowInvoice from "./components/RowInvoice";
import HeaderInvoiceTable from "./HeaderInvoiceTable";

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
    </>
  );
}

export default App;
