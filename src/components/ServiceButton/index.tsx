import React from "react";
import './styles.css'

const SericeButton = (props: {
  serviceName: string;
  serviceCost: number;
  members: number;
  currentTotal: number;
  updateTotal: (total: number) => void;
}) => {
  const { serviceName, serviceCost, members, updateTotal, currentTotal } =
    props;
  const [isActive, setIsActive] = React.useState(false);
  const individualCost = serviceCost / members;
  const toggleActive = () => {
      !isActive
        ? updateTotal(currentTotal + individualCost)
        : updateTotal(currentTotal - individualCost);
      setIsActive(!isActive);
    };
  return (
    <div
      className={`Service-Button ${serviceName} ${isActive && "Active"}`}
      onClick={toggleActive}
    >
      <div className="Service-Button-Name">{serviceName}</div>
      <div className="Service-Button-Cost">Costo: ${serviceCost}</div>
      <div className="Service-Button-Cost">Miembros: {members}</div>
      <div className="Service-Button-Cost">Costo ind.: ${individualCost}</div>
    </div>
  );
};

export default SericeButton;