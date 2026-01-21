import TotalInvoice from "./TotalInvoice";
let RowsWrapper = ({ children }) => {
  let total = 0;
  console.log(children);
  for (let rowObj of children) {
    let totRow = 0;
    totRow = rowObj.props.quantity * rowObj.props.unitCost;
    total += totRow;
  }
  return (
    <>
      {children}
      <TotalInvoice total={total} />
    </>
  );
};

export default RowsWrapper;
