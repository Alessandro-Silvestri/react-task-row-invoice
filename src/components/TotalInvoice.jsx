let TotalInvoice = ({ total }) => {
  return (
    <div>
      <div className="grid grid-cols-[1fr_2fr_100px_80px_1fr] gap-5 mt-2">
        <div className="p-4 text-center rounded"></div>
        <div className="p-4 text-center rounded"></div>
        <div className="p-4 text-center rounded"></div>
        <div className="p-4 text-center rounded"></div>
        <div className="p-4 text-black text-center rounded">
          TOTAL: £ {total}
        </div>
      </div>
    </div>
  );
};

export default TotalInvoice;
