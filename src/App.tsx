import React from "react";
import "./App.css";
import ServiceButton from "./components/ServiceButton";
import TotalContainer from "./components/TotalContainer";

const availableServices = [
  {
    name: "Netflix",
    cost: 300,
    members: 4,
  },
  {
    name: "Spotify",
    cost: 180,
    members: 6,
  },
  {
    name: "HBO Max",
    cost: 75,
    members: 3,
  },
  {
    name: "Youtube",
    cost: 240,
    members: 6,
  },
];

const App = () => {
  const [total, updateTotal] = React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Guia de Precios de Servicios</h3>
        <h5>Selecciona tus servicios</h5>
      </header>
      <div className="App-container">
        {availableServices.map((service) => (
          <ServiceButton
            serviceName={service.name}
            serviceCost={service.cost}
            members={service.members}
            currentTotal={total}
            updateTotal={updateTotal}
          />
        ))}
      </div>
      <div className="App-footer">
        <TotalContainer total={total} />
      </div>
    </div>
  );
};

export default App;
