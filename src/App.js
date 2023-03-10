import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

state = {
  comentarios: [
    {
    
      nome: 'João',
      email: 'Joao@gmail.com',
      data:Date(2023, 5, 10),
      mensagem: 'Olá. tudo bem?'
    },
    {
     
      nome: 'Pedro',
      email: 'Pedro@gmail.com',
      data:Date(2023, 5, 15),
      mensagem: 'Olá. tudo bem sim e voce?'
    }

  ],
  novoComentario: {
    nome: '',
    email: '',
    mensagem: ''
  }
}

adicionarComentario = evento =>{

  evento.preventDefault();
  console.log("Adicionando comentario")

  const novoComentario = {
    nome: 'Maria',
    email: 'Maria@gmail.com',
    data: new Date(2023, 3, 22),
    mensagem: 'Olá pessoal!!!!'
  }

//let lista = this.state.comentarios;
//lista.push(novoComentario);
//this.setState({ comentarios: lista})

this.setState({comentario: [...this.state.comentarios, novoComentario ]})
}

digitacaoDoNome = evento =>{
  console.log(evento)
}

  render(){
    return (
      <div className="App">
        <div className="Titulo">
        <h1>Meu projeto</h1>
        </div>

        {this.state.comentarios.map((comentario, indice) =>(
          <Comentario
          Key={indice}
          nome={comentario.nome} 
          email={comentario.email} 
          data={comentario.data}>
          {comentario.mensagem}
        </Comentario>
        ))}
       
     
          <form method="post" onSubmit={this.adicionarComentario}>
            <h2>Adicionar Comentario</h2>
            <div>
              <input 
              type="text"
               name="nome"
               value={this.state.novoComentario.nome}
               onChange={this.digitacaoDoNome}
               placeholder="Digite seu Nome"/>
            </div>

            <div>
              <input 
              type="email" 
              name="email"
              value={this.state.novoComentario.email}
              placeholder="Digite seu Email"/>
            </div>
          

          <div>
            <textarea 
            name="mensagem"
            value={this.state.novoComentario.mensagem}
            rows="4" />
          </div>


          <button 
          type="submit">Adicionar um comentario</button>
          </form>
      </div>
    );
  }
  
}

export default App;

