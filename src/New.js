import React, { Component } from 'react';

export default class New extends Component{
  render(){
    return(
      <div className="new">
        <h2>Adicionar Nova Pessoa</h2>
        Nome:<input type="text" name="name" />
        Nascimento: <input type="text" name="nasc" />
        RG: <input type="text" name="RG" />
        CPF: <input type="text" name="CPF" />
        Endereço: <input type="text" name="Endereço" />
        CEP: <input type="text" name="CEP" />
        Bairro: <input type="text" name="Bairro" />
        Cidade: <input type="text" name="Cidade" />
        Estado: <input type="text" name="Estado" />
        <button onClick={this.editar.bind(this)}><a href="#">cadastrar</a></button>
      </div>
    );
  }
}