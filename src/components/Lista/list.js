import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./List.css";

export default function List({ Tarefas, handleDelete, handleEdit }) {
  return (
    <ul className="Tarefa">
      {Tarefas.map((Tarefa, index) => (
        <li key={Tarefa} value={Tarefa}>
          {Tarefa}
          <span>
            <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  Tarefas: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
