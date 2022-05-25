import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import PropTypes from "prop-types";
import { act } from "react-dom/test-utils";

export default function Header({ displayTitle, onMenuChange }) {
  const [activeTitle, setActiveTitle] = useState(displayTitle);
  const [item] = useState([
    {
      title: "Cases by country",
      id: 1,
    },
    {
      title: "All registered cases",
      id: 2,
    },
    {
      title: "Case rates by continent",
      id: 3,
    },
  ]);
  return (
    <nav className="bg-gray-800 border-gray-200 px-3">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Logo />
        <div className="w-auto block">
          <ul className="flex flex-row text-lg font-thin ">
            {item.map((item) => {
              return (
                <Menu
                  title={item.title}
                  key={item.id}
                  active={item.title === activeTitle}
                  onClick={(title) => {
                    setActiveTitle(title);
                    onMenuChange(item.id);
                  }}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
Header.protoTypes = {
  displayTitle: PropTypes.string,
  onMenuChange: PropTypes.func,
};
Header.defaultProps = {
  displayTitle: "Cases by country",
  onMenuChange: () => null,
};
