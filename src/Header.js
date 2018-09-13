import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return(
      <header className="header">
        <h1>Cadastro de Pessoas</h1>
        <button>Adicionar nova pessoa</button>
      </header>
    );
  }
}