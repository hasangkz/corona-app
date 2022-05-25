import PropTypes from "prop-types";
export default function Menu({ title, active, onClick }) {
  return (
    <li>
      <a
        onClick={() => {
          onClick(title);
        }}
        className={`block cursor-pointer border-0 px-2 py-0 ${
          active ? "text-green-100" : "text-gray-400"
        } hover:text-green-100`}
      >
        {title}
      </a>
    </li>
  );
}

Menu.protoTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
Menu.defaultProps = {
  active: PropTypes.false,
  onClick: () => null,
};
