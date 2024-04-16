import React, { useState, useEffect } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import PinDropIcon from "@mui/icons-material/PinDrop";

const Awards = () => {
  const targetHotels = 12;
  const targetCustomers = 20;
  const targetCities = 280;
  const duration = 300;
  const [currentHotels, setCurrentHotels] = useState(0);
  const [currentCustomer, setCurrentCustomer] = useState(0);
  const [currentCities, setCurrentCities] = useState(0);
  useEffect(() => {
    const increment = targetHotels / duration;
    const interval = setInterval(() => {
      setCurrentHotels((prevHotels) => {
        const newHotels = prevHotels + increment;
        return newHotels >= targetHotels ? targetHotels : newHotels;
      });
    }, 0.1);

    return () => clearInterval(interval);
  }, [targetHotels, duration]);
  useEffect(() => {
    const increment = targetCustomers / duration;
    const interval = setInterval(() => {
      setCurrentCustomer((prevCustomer) => {
        const newCustomer = prevCustomer + increment;
        return newCustomer >= targetCustomers ? targetCustomers : newCustomer;
      });
    }, 0.1);

    return () => clearInterval(interval);
  }, [targetCustomers, duration]);
  useEffect(() => {
    const increment = targetCities / duration;
    const interval = setInterval(() => {
      setCurrentCities((prevCities) => {
        const newCities = prevCities + increment;
        return newCities >= targetCities ? targetCities : newCities;
      });
    }, 0.1);

    return () => clearInterval(interval);
  }, [targetCities, duration]);
  return (
    <div className="awardNumbers">
      <div className="box apartments">
        <div className="column">
          <ApartmentIcon className="awardIcons" />
        </div>
        <div className="column">
          <p className="awardFigures">{Math.round(currentHotels)}K+</p>
          <p>Hotels</p>
        </div>
      </div>
      <div className="box customers">
        <div className="column">
          <SentimentVerySatisfiedIcon className="awardIcons" />
        </div>
        <div className="column">
          <p className="awardFigures">{Math.round(currentCustomer)}M+</p>
          <p>Happy Customers</p>
        </div>
      </div>
      <div className="box cities">
        <div className="column">
          <PinDropIcon className="awardIcons" />
        </div>
        <div className="column">
          <p className="awardFigures">{Math.round(currentCities)}+</p>
          <p>Cities</p>
        </div>
      </div>
    </div>
  );
};
export default Awards;