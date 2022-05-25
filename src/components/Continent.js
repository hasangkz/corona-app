import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL, TOKEN } from "../consts/index";

export default function Continent() {
  const [values] = useState([
    {
      title: "Continent",
      value: "continent",
    },
    {
      title: "Total Cases",
      value: "totalCases",
    },
    {
      title: "Active Cases",
      value: "activeCases",
    },
    {
      title: "New Cases",
      value: "newCases",
    },
    {
      title: "Total Deaths",
      value: "totalDeaths",
    },
    {
      title: "New Deaths",
      value: "newDeaths",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    const response = await axios.get(`${URL}continentData`, {
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
      <div className="flex flex-col">
        <div className="inline-block min-w-full">
          <h3 className="text-xl mb-8 font-bold text-black text-center">
            CORONA TABLE
          </h3>
          <div className="overflow-hidden shadow-md ">
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              <table className="min-w-full">
                <thead className="bg-emerald-800">
                  <tr>
                    {values.map((item) => {
                      return (
                        <th
                          key={item.title}
                          className="p-4 text-s font-medium text-black uppercase text-left"
                        >
                          {item.title}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => {
                    return (
                      <tr key={item.continent} className="bg-gray-400 border-b">
                        {values.map((subItem) => {
                          return (
                            <td
                              className="py-4 px-4 text-sm font-medium text-white whitespace-nowrap"
                              key={subItem.value}
                            >
                              {item[subItem.value]}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
