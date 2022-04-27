import autocomplete from "../helpers/search_autocomplete";
import { useEffect, useState } from "react";

function FilterInput({ applyFilters }) {
  let substrates = [
    "All Substrates",
    "Painted Siding",
    "Painted Board and Bat",
    "Painted Stucco",
    "Vinyl",
    "Aluminum",
    "Wood Painted Siding",
  ];

  useEffect(() => {
    let colors = ["blue", "green", "yellow", "black", "Pure White"];
    autocomplete(document.getElementById("colorInput"), colors);
  }, []);

  return (
    <div>
      <h2>Filter</h2>
      <form>
        <div className="autocomplete">
          <input
            id="colorInput"
            type="text"
            placeholder="Enter a Color"
          ></input>
        </div>
        <select id="substrateInput">
          {substrates.map((substrate) => {
            return (
              <option value={substrate} key={substrate}>
                {substrate}
              </option>
            );
          })}
        </select>
        <button
          onClick={(event) => {
            event.preventDefault();
            applyFilters();
          }}
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}

export default FilterInput;