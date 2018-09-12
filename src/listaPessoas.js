import React, { Component } from 'react';

export default class listaPessoas extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaDeNomes: ["Adriana da Silva", "Breno das Flores", "Carlos Eduardo de Souza", "Juliana Cadidé", "Maria Alice Ribeiro", "Maria Cicera Madalena", "Neide Maria Ribeiro", "Osvaldo dos Santos", "Ygo Ribeiro", "Valdir Papel", "Zilma de Oliveira"]
        };
    }
    render(){
        return(
            <div className="lista"> 
                {this.state.listaDeNomes}
            </div>
        );
    }
}
