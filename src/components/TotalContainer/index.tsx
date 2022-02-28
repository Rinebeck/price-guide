import React from "react";

const TotalContaner = (props: { total: number }) => {
  const { total } = props;
  return (
    <div className="Total-Container">
      <div className="Total-Container-Total">Total: ${total} MXN (Mensual)</div>
      <div className="Total-Container-Info">
        Depósito a débito CitiBanamex 5256 7834 9531 4297
      </div>
    </div>
  );
};

export default TotalContaner;
