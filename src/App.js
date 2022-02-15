import React, { Component } from 'react';
import ListaDeNotas from "./components/listadenotas"
import FormularioCadastro from "./components/formulariocadastro"
export default class App extends Component{
  render(){
  return (
    <section>
      <FormularioCadastro/>
      <ListaDeNotas/>
    </section>
  );
}
}


