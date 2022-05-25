import { useState } from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";
import AllVirus from "./components/AllVirus";
import Continent from "./components/Continent";
function App() {
  const [value, setValue] = useState(1);
  return (
    <>
      <Header
        onMenuChange={(key) => {
          setValue(key);
        }}
      />
      <div className="md:container md:mx-auto p-6  estimate">
        {value === 1 && <Countries />}
        {value === 2 && <AllVirus />}
        {value === 3 && <Continent />}
      </div>
    </>
  );
}

export default App;
