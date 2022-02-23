import React, { Component } from "react";
import "./estilo.css"

export default class FormularioCadastro extends Component {
  constructor(){
    super();
    this.titulo="";
    this.texto="";
  }
  
  handleMudancaTitulo(evento){
    this.titulo =evento.target.value
    evento.stopPropagation();
  }
  handleMudancaTexto(evento){
    this.texto = evento.target.value
    evento.stopPropagation();
  }
  criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    console.log("Uma nota foi criada " + this.titulo + this.texto)
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this.criarNota.bind(this)}>
        
        <input className="form-cadastro_input" 
        type="text" 
        placeholder="Título" 
        onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea className="form-cadastro_input" 
        placeholder="Escreva sua nota..."
        onChange={this.handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_submit">CRIAR NOTA</button>
      </form>
    );
  }
}
         