import React from "react";
import { Header } from "semantic-ui-react";
import CarForm from "./Form/CarForm";

const Homepage = () => {
  return (
    <div style={{alignItems: "center", textAlign: "center"}}>
      <Header as="h2" content="Welcome to Michael's Car Lot!" />

      <CarForm />
    </div>
  );
};

export default Homepage;
