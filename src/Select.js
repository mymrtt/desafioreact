import React, { Component } from 'react';

export default class Select extends Component{
  render(){
    return(
      <div className="select"> 
        <h2>Pessoa Selecionada</h2>
        <div>
          <p>Nome: Maria Alice Ribeiro</p> 
          <p>Nascimento: 04/05/1985</p>
        </div>
        <div>
          <p>RG: 1457011474</p>
          <p>CPF: 024.098.456-71</p>
        </div>
        <div>
          <p>Endereço: Rua dos Girassóis, 765</p>
          <p>CEP: 48901-190</p>
        </div>
        <div>
          <p>Bairro: Quidé</p>
          <p>Cidade: Juazeiro</p>
          <p>Estado: Bahia</p>
        </div>
        <div>
          <button onClick={this.adicionar.bind(this)}><a href="#">adicionar nova</a></button>
          <button onClick={this.editar.bind(this)}><a href="#">editar</a></button>
        </div>
      </div>
    );
  }
}