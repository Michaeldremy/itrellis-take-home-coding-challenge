import React, { useState } from "react";
import { Button, Header } from "semantic-ui-react";

const CarForm = () => {
  const inventory = [
    {
      _id: "59d2698c2eaefb1268b69ee5",
      make: "Chevy",
      year: 2016,
      color: "Gray",
      price: 16106,
      hasSunroof: false,
      isFourWheelDrive: true,
      hasLowMiles: true,
      hasPowerWindows: false,
      hasNavigation: true,
      hasHeatedSeats: false,
    },
    {
      _id: "59d2698c05889e0b23959106",
      make: "Toyota",
      year: 2012,
      color: "Silver",
      price: 18696,
      hasSunroof: true,
      isFourWheelDrive: true,
      hasLowMiles: false,
      hasPowerWindows: true,
      hasNavigation: false,
      hasHeatedSeats: true,
    },
    {
      _id: "59d2698c6f1dc2cbec89c413",
      make: "Mercedes",
      year: 2016,
      color: "Black",
      price: 18390,
      hasSunroof: true,
      isFourWheelDrive: false,
      hasLowMiles: false,
      hasPowerWindows: true,
      hasNavigation: true,
      hasHeatedSeats: false,
    },
    {
      _id: "59d2698c340f2728382c0a73",
      make: "Toyota",
      year: 2015,
      color: "White",
      price: 15895,
      hasSunroof: true,
      isFourWheelDrive: false,
      hasLowMiles: true,
      hasPowerWindows: true,
      hasNavigation: false,
      hasHeatedSeats: true,
    },
    {
      _id: "59d2698cba9b82c2347cd13a",
      make: "Ford",
      year: 2014,
      color: "Gray",
      price: 19710,
      hasSunroof: false,
      isFourWheelDrive: true,
      hasLowMiles: false,
      hasPowerWindows: false,
      hasNavigation: true,
      hasHeatedSeats: true,
    },
    {
      _id: "59d2698ce2e7eeeb4f109001",
      make: "Toyota",
      year: 2014,
      color: "Red",
      price: 19248,
      hasSunroof: true,
      isFourWheelDrive: false,
      hasLowMiles: true,
      hasPowerWindows: true,
      hasNavigation: true,
      hasHeatedSeats: true,
    },
    {
      _id: "59d2698cd6a3b8f0dd994c9d",
      make: "Toyota",
      year: 2015,
      color: "Black",
      price: 13170,
      hasSunroof: true,
      isFourWheelDrive: false,
      hasLowMiles: true,
      hasPowerWindows: true,
      hasNavigation: false,
      hasHeatedSeats: false,
    },
    {
      _id: "59d2698c86ab54cee8acdc7b",
      make: "Mercedes",
      year: 2013,
      color: "Gray",
      price: 15669,
      hasSunroof: false,
      isFourWheelDrive: false,
      hasLowMiles: true,
      hasPowerWindows: false,
      hasNavigation: false,
      hasHeatedSeats: false,
    },
    {
      _id: "59d2698cda9e8d39476c678a",
      make: "Toyota",
      year: 2015,
      color: "White",
      price: 16629,
      hasSunroof: false,
      isFourWheelDrive: false,
      hasLowMiles: true,
      hasPowerWindows: false,
      hasNavigation: false,
      hasHeatedSeats: true,
    },
  ];

  const [carColor, setCarColor] = useState("");
  const [price, setPrice] = useState(Number);
  const [sunroof, setSunroof] = useState(true);
  const [fourWheelDrive, setFourWheelDrive] = useState(true);
  const [lowMiles, setLowMiles] = useState(true);
  const [powerWindows, setPowerWindows] = useState(true);
  const [navigation, setNavigation] = useState(true);
  const [heatedSeats, setHeatedSeats] = useState(true);
  const [formSubmitted, setFormSubbmited] = useState(true);

  // Functions to handle individual form submissions
  const handleColorChoosen = (event) => {
    setCarColor(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleSunroof = () => {
    setSunroof((value) => !value);
  };

  const handleFourWheelDrive = () => {
    setFourWheelDrive((value) => !value);
  };

  const handleLowMiles = () => {
    setLowMiles((value) => !value);
  };

  const handlePowerWindows = () => {
    setPowerWindows((value) => !value);
  };

  const hanldeNavigation = () => {
    setNavigation((value) => !value);
  };

  const handleHeatedSeats = () => {
    setHeatedSeats((value) => !value);
  };

  let filteredCriteria = inventory.map((car) => {
    if (car.color === carColor) {
      for (const [key, value] of Object.entries(car)) {
        if (key === "make") {
          return (
            <>
              <Header
                content="Model:"
                as="label"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              />
              <Header content={value} as="label" />
              <br />
            </>
          );
        }
      }
    }
  });

  // Function to handle all of the user submissions and will return the cars that fit the criteria from inventory
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setFormSubbmited(false);
  };

  // Red, white, gray, silver, black

  // Semantic UI Forms are not currently working.. I am using regular HTML forms/inputs for now, I apologize for it not looking good.

  return (
    <>
      <div style={{ marginTop: "100px", marginBottom: "50px" }}>
        <Header as="h3" content="What type of car are you looking for?" />
      </div>

      <div>
        <form onSubmit={onSubmitHandler}>
          {/* Dropdown */}
          <label>Car Color: </label>
          <select onChange={handleColorChoosen}>
            <option value="Red">Red</option>
            <option value="White">White</option>
            <option value="Silver">Silver</option>
            <option value="Gray">Gray</option>
            <option value="Black">Black</option>
          </select>
          <br />
          <br />
          {/* Number */}
          <label>Price: </label>
          <input type="number" name="price" onChange={handlePrice}></input>
          <br />
          <br />
          {/* Checkbox */}
          <label>Sunroof: </label>
          <input
            type="checkbox"
            name="hasSunroof"
            onChange={handleSunroof}
          ></input>
          <br />
          <br />
          {/* Checkbox */}
          <label>4 Wheel Drive: </label>
          <input
            type="checkbox"
            name="isFourWheelDrive"
            onChange={handleFourWheelDrive}
          ></input>
          <br />
          <br />
          {/* Checkbox */}
          <label>Has Low Miles: </label>
          <input
            type="checkbox"
            name="hasLowMiles"
            onChange={handleLowMiles}
          ></input>
          <br />
          <br />
          {/* Checkbox */}
          <label>Power Windows: </label>
          <input
            type="checkbox"
            name="hasPowerWindows"
            onChange={handlePowerWindows}
          ></input>
          <br />
          <br />
          {/* Checkbox */}
          <label>Navigation: </label>
          <input
            type="checkbox"
            name="hasNavigation"
            onChange={hanldeNavigation}
          ></input>
          <br />
          <br />
          {/* Checkbox */}
          <label>Heated Seats: </label>
          <input
            type="checkbox"
            name="hasHeatedSeats"
            onChange={handleHeatedSeats}
          ></input>
          <br />
          <br />
          <Button color="green" content="Submit" size="medium" />
        </form>
      </div>

      {filteredCriteria}
    </>
  );
};

export default CarForm;
