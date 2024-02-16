import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CountryList } from "react-select-country-list";

import Select from "react-select";
const StepTwoPage = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);
  return (
    <>
      <div className="font-montserrat flex flex-col ">
        <div className="mt-20 mx-auto max-w-max space-y-2 mb-5">
          <h1 className="text-[30px] font-semibold">
            Help us verify your identity{" "}
          </h1>
          <h3 className="text-[20px]">
            Before you can invest, we’re required by law to collect some
            information about you.
          </h3>
        </div>

        <div className="flex flex-col space-y-4 w-[54%] mx-auto">
          <div className="flex flex-col border-2 rounded-lg border-gray-400 hover:border-black p-1">
            <label htmlFor="" className="p-1 text-stone-400 ">
              Legal Name
            </label>
            <input type="text" className="p-2 border-none outline-none" />
          </div>
          <div className="flex flex-col border-2 rounded-lg border-gray-400 hover:border-black p-1">
            <label htmlFor="" className="p-1 text-stone-400">
              Address
            </label>
            <input type="text" className="p-2 border-none outline-none" />
          </div>
          <div className="flex ">
            <div className="flex flex-col border-2 rounded-lg border-gray-400 hover:border-black p-1">
              <Select
                options={countries}
                value={selectedCountry}
                onChange={(selectedOption) =>
                  setSelectedCountry(selectedOption)
                }
                className="border-outline outline-none"
              />
            </div>
            <div className="flex flex-col border-2 rounded-lg border-gray-400 hover:border-black p-1">
              <label htmlFor="" className="p-1 text-stone-400">
                Pincode
              </label>
              <input type="text" className="p-2 border-none outline-none" />
            </div>
          </div>
          <div className="flex flex-col border-2 rounded-lg border-gray-400 hover:border-black p-1">
            <label htmlFor="" className="p-1 text-stone-400">
              Pan Number
            </label>
            <input type="number" className="p-2 border-none outline-none" />
          </div>
        </div>
      </div>
      <div className="absolute right-10 border-2 bg-black text-white p-2  font-semibold font-montserrat">
        <Link to="/step2">Next</Link>
      </div>
    </>
  );
};

export default StepTwoPage;
