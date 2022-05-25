import React from "react";
import PropTypes from "prop-types";

export default function Card({ country, totalcase, totaldeath }) {
  return (
    <div className="max-w-xs rounded shadow-md overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 hover:ease-in duration-500">
      <img
        className="w-full h-32"
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
        alt="country"
      />
      <div className="p-6">
        <div className="font-bold text-xl mb-3">
          <h1 className="font-bold text-zinc-900">{country}</h1>
          <p className="text-teal-400 font-light">Total Case: {totalcase}</p>
          <p className="text-red-400 font-light">Total Death: {totaldeath}</p>
        </div>
      </div>
    </div>
  );
}
Card.protoTypes = {
  country: PropTypes.string,
  totalCase: PropTypes.string,
  totalDeath: PropTypes.string,
};
Card.defaultProps = {
  country: "",
  totalCase: "",
  totalDeath: "",
};
