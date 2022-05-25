import axios from "axios";
import { useEffect, useState } from "react";
import { URL, TOKEN } from "../consts/index";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getData();
  }, [query]);

  const getData = async () => {
    setLoading(true);

    const response = await axios.get(`${URL}countriesData?country=${query}`, {
      headers: {
        authorization: TOKEN,
      },
    });
    // console.log(response);
    setLoading(false);
    setData(response.data.result);
  };

  return (
    <>
      <div className="mt6 mb-6">
        <input
          placeholder="Search country..."
          value={query}
          className="w-full rounded shadow appearance-none p-2 block border-2"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          data.map((item) => {
            return (
              <Card
                key={item.country}
                country={item.country}
                totalcase={item.totalCases}
                totaldeath={item.totalDeaths}
              />
            );
          })
        )}
      </div>
    </>
  );
};
export default Countries;
