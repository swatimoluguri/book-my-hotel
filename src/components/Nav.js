import Logo from "../logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import Search from "./Search";
import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Nav = () => {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef();
  const [city, setCity] = useState(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (datePickerRef.current && !datePickerRef.current.contains(e.target)) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setDateRange({ startDate: start, endDate: end });
    if (start && end) {
      setIsOpen(false);
    }
  };
  const handleOnsearchChange = (searchData) => {
    setCity(searchData.label);
  };

  const today = new Date();

  return (
    <nav>
      <div className="bg-img">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img className="logo" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="Nav-links">
            <ul>
              <li title="Home">
                <Link to="/">Home</Link>
              </li>
              <li title="Explore">
                <Link to="suggestions" smooth={true} duration={500}>Explore</Link>
              </li>
              <li title="About">
                <Link to="our-story" smooth={true} duration={500}>About</Link>
              </li>
              <li title="Login">
                <Link to="contact-us" smooth={true} duration={500}> Login</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-text">
          <h1 className="satisfy-regular">
            Your <span className=" animate-charcter"> perfect stay</span>,
            simplified.
          </h1>
          <div className="searchDiv">
            <Search onSearchChange={handleOnsearchChange} />
            <div ref={datePickerRef}>
              <DatePicker
                className="searchInput dates"
                selected={dateRange.startDate}
                onChange={handleDateChange}
                selectsRange
                startDate={dateRange.startDate}
                endDate={dateRange.endDate}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select dates"
                open={isOpen}
                minDate={today}
              />
            </div>
            <div>
              <button className="searchButton">Search</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
