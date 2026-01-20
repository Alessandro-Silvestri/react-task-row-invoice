let RowInvoice = ({ item, description, unitCost, quantity }) => {
  return (
    <div>
      <div className="grid grid-cols-[1fr_2fr_100px_80px_1fr] gap-5 mt-2">
        <div className="bg-blue-500 p-4 text-white text-center rounded">
          {item}
        </div>
        <div className="bg-blue-500 p-4 text-white text-center rounded">
          {description}
        </div>
        <div className="bg-blue-500 p-4 text-white text-center rounded">
          {unitCost}
        </div>
        <div className="bg-blue-500 p-4 text-white text-center rounded">
          {quantity}
        </div>
        <div className="bg-blue-500 p-4 text-white text-center rounded">
          £ {unitCost * quantity}
        </div>
      </div>
    </div>
  );
};

export default RowInvoice;