import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL, TOKEN } from "../consts/index";

export default function AllVirus() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await axios.get(`${URL}totalData`, {
      headers: { authorization: TOKEN },
    });
    setLoading(false);
    setData(response.data.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="flex flex-col items-center justify-content h-full mt-16">
          <h2 className=" text-5xl text-teal-600 mb-8">
            TOTAL CASES: {data.totalCases}
          </h2>
          <h2 className="text-5xl text-red-600">
            TOTAL DEATHS: {data.totalDeaths}
          </h2>
        </div>
      )}
    </>
  );
}
