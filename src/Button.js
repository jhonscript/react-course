import PropTypes from "prop-types";

const handleClick = (event) => {
  console.log(event);
}

export function Button({ text, name = "Nombre de Usuario" }) {
  console.log(text);
  if (text === "") console.error("el texto es requerido");

  return (
    <button id="myButton"
      onClick={handleClick}
    >
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  name: "Some User",
};
