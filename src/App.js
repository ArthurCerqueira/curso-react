import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas/listadenotas"
import FormularioCadastro from "./components/FormularioCadastro/formulariocadastro"
import "./assets/app.css"
import "./assets/index.css"

export default class App extends Component{
  render(){
  return (
    <section className='conteudo'>
      <FormularioCadastro/>
      <ListaDeNotas/>
    </section>
  );
}
}


