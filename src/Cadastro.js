import React from 'react';
import { Switch, Route } from 'react-router-dom';
import listaPessoas from './listaPessoas';
import pessoaSelecionada from './pessoaSelecionada';
import nova from './nova';

export default class Cadastro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    adicionar(){
        this.setState({

        });
    }
    editar(){
        this.setState({

        });
    }
    atualizar(){
        this.setState({

        });
    }
    
    render(){
        let template = <div className="App">
          <header className="header">
              <h1>Cadastro de Pessoas</h1> {/*usada em todas as telas */}
          </header>
          <main>
            <Switch>
              <Route path="/listaPessoas" component={listaPessoas} />
              <Route path="/pessoaSelecionada" component={pessoaSelecionada} />
              <Route path="/nova" component={nova} />
            </Switch>
            <section>
              <div>
                <div>
                  <h2>Pessoa selecionada</h2> {/*usada em todas as telas */}
                </div>
              </div>
              <div>
                Nome:<input type="text" name="name" /><br />
                Nascimento: <input type="text" name="nasc" /><br />
                RG: <input type="text" name="RG" /><br />
                CPF: <input type="text" name="CPF" /><br />
                Endereço: <input type="text" name="End" /><br />
                CEP: <input type="text" name="CEP" /><br />
                Bairro: <input type="text" name="Bairro" /><br />
                Cidade: <input type="text" name="Cidade" /><br />
                Estado: <input type="text" name="Estado" /><br />
                <button onClick={this.editar.bind(this)}><a href="#">atualizar</a></button>
                <button onClick={this.editar.bind(this)}><a href="#">cadastrar</a></button>
              </div>
            </section>      
          </main>
      </div>
      return template;
    }  
}
