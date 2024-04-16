import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoAPIOptions } from "../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnchange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}?countryIds=IN&sort=-population&namePrefix=${inputValue}`,
      geoAPIOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name},${city.regionCode}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      width:"100%",
      fontSize: 13,
      border: "none",
      background: "transparent",
      boxShadow: "none",
      cursor: "text",
      "&:focus": {
        border: "none",
        boxShadow: "none",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: 12,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#007bff" : "transparent",
      "&:hover": {
        backgroundColor: "#f0f0f0",
        cursor:"pointer",
      },
    }),
    loadingMessage: (base, state) => ({
      ...base,
      fontSize: 12,
      color: "#aaa",
      fontStyle: "italic",
    }),
    dropdownIndicator: (base, state) => ({ display: "none" }),
    indicatorSeparator: (base, state) => ({ display: "none" }),
    noOptionsMessage: (provided, state) => ({
      ...provided,
      fontSize: 12,
      color: "#999",
    }),
  };

  return (
    <AsyncPaginate
      className="searchInput location"
      placeholder="Where would you like to go.."
      debounceTimeout={600}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
      styles={customStyles}
      inputStyle={{ color: "#aaa" }}
    />
  );
};

export default Search;
