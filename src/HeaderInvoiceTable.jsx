let HeaderInvoiceTable = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-[1fr_2fr_100px_80px_1fr] gap-5 mt-2">
          <div className="p-4 text-black text-center rounded">
            Item
          </div>
          <div className="p-4 text-black text-center rounded">
            Description
          </div>
          <div className="p-4 text-black text-center rounded">
            Unit cost
          </div>
          <div className="p-4 text-black text-center rounded">
            Qty
          </div>
          <div className="p-4 text-black text-center rounded">
            Total
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInvoiceTable;
