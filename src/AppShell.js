import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import "./style.css";

import Header from './Header';
import List from './List';
import New from './New';
import Select from './Select';
import Edit from './Edit';

export default class AppShell extends Component {
  constructor(props){
    super(props);
      this.state = {
        pessoas: [
          {
            id: "adriana",
            nome: "Adriana da Silva",
            bairro: "Pedra do Lorde",
            cep: "48901-190",
            cidade: "Juazeiro",
            cpf: "056.098.120-72",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:26.920Z",
            rg: "1334081571"
          },
          { id: "breno",
            nome: "Breno das Flores",
            bairro: "Pedra do Lorde",
            cep: "48901-190",
            cidade: "Juazeiro",
            cpf: "056.098.120-72",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:26.920Z",
            rg: "1334081571"
          },
          { 
            id: "carlos",
            nome: "Carlos Eduardo de Souza",
            bairro: "Pedra do Lorde",
            cep: "48901-190",
            cidade: "Juazeiro",
            cpf: "056.098.120-72",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:26.920Z",
            rg: "1334081571"
          },
          { 
            id: "juliana",
            nome: "Juliana Cadidé",
            bairro: "Pedra do Lorde",
            cep: "48901-190",
            cidade: "Juazeiro",
            cpf: "056.098.120-72",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:26.920Z",
            rg: "1334081571"
          },
          { 
            id: "maria",
            nome: "Maria Alice Ribeiro",
            bairro: "Pedra do Lorde",
            cep: "48901-190",
            cidade: "Juazeiro",
            cpf: "056.098.120-72",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:26.920Z",
            rg: "1334081571"
          },
          { 
            id: "mariacicera",
            nome: "Maria Cicera Madalena",
            bairro: "Pedra do Lorde",
            cep: "48901-190",
            cidade: "Juazeiro",
            cpf: "056.098.120-72",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:26.920Z",
            rg: "1334081571"
          },
          { 
            id: "neide",
            nome: "Neide Maria Ribeiro",
            bairro: "Pedra do Lorde",
            cep: "48901-190",
            cidade: "Juazeiro",
            cpf: "056.098.120-72",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:26.920Z",
            rg: "1334081571"
          },
          { 
            id: "osvaldo",
            nome: "Osvaldo dos Santos",
            bairro: "Pedra do Lorde",
            cep: "48901-190",
            cidade: "Juazeiro",
            cpf: "056.098.120-72",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:26.920Z",
            rg: "1334081571"
          },
          { 
            id: "ygor",
            nome: "Ygo Ribeiro",
            bairro: "Pedra do Lorde",
            cep: "48901-190",
            cidade: "Juazeiro",
            cpf: "056.098.120-72",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:26.920Z",
            rg: "1334081571"
          },
          { 
            id: "valdir",
            nome: "Valdir Papel",
            bairro: "Pedra do Lorde",
            cep: "48901-190",
            cidade: "Juazeiro",
            cpf: "056.098.120-72",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:26.920Z",
            rg: "1334081571"
          },
          { 
            id: "zilma",
            nome: "Zilma de Oliveira",
            bairro: "Pedra do Lorde",
            cep: "48901-190",
            cidade: "Juazeiro",
            cpf: "056.098.120-72",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:26.920Z",
            rg: "1334081571"
          },
        ]
      };
  } 
  render(){
    console.log(this.props);
    return (
      <div className="body">
        <Header />
        <div className="container">
          <Lista pessoas={ this.state.pessoas } />
          <Switch>
            <Route path="/List" component={List} />
            <Route exact path="/:id" component={Select} />
            <Route path="/New" component={New} />
            <Route path="/Edit" component={Edit} />
          </Switch>
        </div>
      </div>
    );
  }  
}
