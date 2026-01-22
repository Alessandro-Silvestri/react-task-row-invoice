import TotalInvoice from "./TotalInvoice";
import { useState, useEffect } from "react";

let RowsWrapper = ({ children }) => {
  const [totalState, setTotalState] = useState(0);

  // calculating the variable 'totalState' after all the children has been rendered 
  // [children], is the dependency array. This tells React to re-run the effect function only when
  // the children prop's value changes between renders, or after the initial render. If children doesn't change, the
  // effect doesn't re-run, which is important for performance.
  useEffect(() => {
    let total = 0;
    for (let rowObj of children) {
      let totRow = 0;
      totRow = rowObj.props.quantity * rowObj.props.unitCost;
      total += totRow;
    }
    setTotalState(total);
  }, [children]);
  
  return (
    <>
      {children}
      <TotalInvoice total={totalState} />
    </>
  );
};

export default RowsWrapper;
