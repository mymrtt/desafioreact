import React, { Component } from 'react';

export default class pessoaSelecionada extends Component{
    render(){
        return(
            <div className="pessoaSelecionada"> 
                <p>Nome: Maria Alice Ribeiro</p> 
                <p>Nascimento: 04/05/1985</p>
                <p>RG: 1457011474</p>
                <p>CPF: 024.098.456-71</p>
                <p>Endereço: Rua dos Girassóis, 765</p>
                <p>CEP: 48901-190</p>
                <p>Bairro: Quidé</p>
                <p>Cidade: Juazeiro</p>
                <p>Estado: Bahia</p>
                <div>
                    <button onClick={this.adicionar.bind(this)}><a href="#">adicionar nova</a></button>
                    <button onClick={this.editar.bind(this)}><a href="#">editar</a></button>
                </div>
            </div>
        );
    }
}