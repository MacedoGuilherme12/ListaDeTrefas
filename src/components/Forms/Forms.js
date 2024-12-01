import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";

import "./Forms.css";

export default function Form({ handleChange, novaTarefa, handleClick }) {
  return (
    <form action="#" className="form">
      <input type="text" onChange={handleClick} value={novaTarefa} />
      <button type="submit" onClick={handleChange}>
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  novaTarefa: PropTypes.func.isRequired,
};
