import React, { Component } from "react";
import Form from "./Forms/Forms";
import List from "./Lista/list";
import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    Tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("Tarefas"));
    if (!tarefas) return;
    this.setState({
      Tarefas: tarefas,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { Tarefas } = this.state;

    if (Tarefas == prevState.Tarefas) return;
    localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
  }
  handleClick = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };
  handleChange = (e) => {
    e.preventDefault();
    const { Tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if (novaTarefa == "") return;
    if (Tarefas.indexOf(novaTarefa) !== -1) return;
    if (index == -1) {
      this.setState({
        Tarefas: [...Tarefas, novaTarefa.trim()],
        novaTarefa: "",
      });
    } else {
      Tarefas[index] = novaTarefa;
      if (novaTarefa == "") return;
      this.setState({
        index: -1,
        Tarefas: [...Tarefas],
        novaTarefa: "",
      });
    }
  };
  handleEdit = (e, index) => {
    const { Tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: Tarefas[index],
    });
  };
  handleDelete = (e, index) => {
    const { Tarefas } = this.state;
    const tarefasFiltradas = Tarefas.filter((_, i) => i !== index);
    this.setState({
      Tarefas: [...tarefasFiltradas],
    });
  };
  render() {
    const { novaTarefa, Tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          novaTarefa={novaTarefa}
        />
        <List
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          Tarefas={Tarefas}
        />
      </div>
    );
  }
}
