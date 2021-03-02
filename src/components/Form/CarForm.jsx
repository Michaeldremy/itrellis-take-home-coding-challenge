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
  const [sunroof, setSunroof] = useState(false);
  const [fourWheelDrive, setFourWheelDrive] = useState(false);
  const [lowMiles, setLowMiles] = useState(false);
  const [powerWindows, setPowerWindows] = useState(false);
  const [navigation, setNavigation] = useState(false);
  const [heatedSeats, setHeatedSeats] = useState(false);

  // This state was going to be used to display results after the form was submitted
  const [formSubmitted, setFormSubbmited] = useState(false);

  let filteredArray = [];

  // *Not working* Idea was to map through our inventory and then if the properties on the different cars
  // matched input from the form then return the result of the cars that matched.
  let filteredCriteria = inventory.map((car) => {
    if (car.color === carColor && car.isFourWheelDrive === fourWheelDrive) {
      filteredArray.push(car);
    }
  });

  // Mapping through the filtered/matched results array and displaying the matched cars
  let results = filteredArray.map((item) => {
    return (
      <>
        <Header content={`Make: ${item.make}`} as="h3" />
        <Header content={`Year: ${item.year}`} as="h3" />
        <Header content={`Color: ${item.color}`} as="h3" />
        <Header content={`Price: $${item.price}`} as="h3" />
        {/* {item.isFourWheelDrive === true ? <Header content={'Four Wheel Drive: Yes'} as="h3"/> : <Header content={'Four Wheel Drive: No'} as="h3"/>}
        {item.hasLowMiles === true ? <Header content={'Low Miles: Yes'} as="h3"/> : <Header content={'Low Miles: No'} as="h3"/>}
        {item.hasSunroof === true ? <Header content={'Sunroof: Yes'} as="h3"/> : <Header content={'Sunroof: No'} as="h3"/>}
        {item.hasHeatedSeats === true ? <Header content={'Heated Seats: Yes'} as="h3"/> : <Header content={'Heated Seats: No'} as="h3"/>} */}
        {/* {item.hasPowerWindows === true ? <Header content={'Power Windows: Yes'} as="h3"/> : <Header content={'Power Windows: No'} as="h3"/>} */}
      </>
    );
  });

  // Function to handle all of the user submissions and will return the cars that fit the criteria from inventory
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormSubbmited(true);
  };

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
          <select onChange={(e) => setCarColor(e.target.value)}>
            <option value="Red">Red</option>
            <option value="White">White</option>
            <option value="Silver">Silver</option>
            <option value="Gray">Gray</option>
            <option value="Black">Black</option>
          </select>
          <br />
          <br />
          {/* Checkbox */}
          <label>Sunroof: </label>
          <input
            type="checkbox"
            name="hasSunroof"
            onChange={() => setSunroof(!sunroof)}
          ></input>
          <br />
          <br />
          {/* Checkbox */}
          <label>4 Wheel Drive: </label>
          <input
            type="checkbox"
            name="isFourWheelDrive"
            onChange={() => setFourWheelDrive(!fourWheelDrive)}
          ></input>
          <br />
          <br />
          {/* Checkbox */}
          <label>Has Low Miles: </label>
          <input
            type="checkbox"
            name="hasLowMiles"
            onChange={() => setLowMiles(!lowMiles)}
          ></input>
          <br />
          <br />
          {/* Checkbox */}
          <label>Power Windows: </label>
          <input
            type="checkbox"
            name="hasPowerWindows"
            onChange={() => setPowerWindows(!powerWindows)}
          ></input>
          <br />
          <br />
          {/* Checkbox */}
          <label>Navigation: </label>
          <input
            type="checkbox"
            name="hasNavigation"
            onChange={() => setNavigation(!navigation)}
          ></input>
          <br />
          <br />
          {/* Checkbox */}
          <label>Heated Seats: </label>
          <input
            type="checkbox"
            name="hasHeatedSeats"
            onChange={() => setHeatedSeats(!heatedSeats)}
          ></input>
          <br />
          <br />
          <Button color="green" content="Submit" size="medium" />
        </form>
      </div>

      {results}
    </>
  );
};

export default CarForm;
