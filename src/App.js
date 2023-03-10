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

  ]
}

adicionarComentario = () =>{
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

this.setState({
  comentarios: [ ...this.state.comentarios, novoComentario]
})
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
       
     
          <button onClick={this.adicionarComentario} >Adicionar um comentario</button>
      </div>
    );
  }
  
}

export default App;

