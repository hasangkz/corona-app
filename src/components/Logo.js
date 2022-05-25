export default function Logo({ logo, text }) {
  return (
    <div className="flex items-center">
      <img src={logo} alt="corona" className="mr-3 h-14" />
      <span className="self-center text-3xl whitespace-nowrap text-red-400">
        {text}
      </span>
    </div>
  );
}
Logo.defaultProps = {
  text: "Coronavirus App",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Coronavirus_SVG_Vector_Image.svg/2048px-Coronavirus_SVG_Vector_Image.svg.png",
};
