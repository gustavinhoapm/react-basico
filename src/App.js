import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comentario nome="João" email="João@gmail.com" data={new Date(2023, 3, 10)}>
        Olá. tudo bem?
      </Comentario>
      <Comentario nome="Maria" email="Maaria@gmail.com" data={new Date(2023, 5, 10)}>
      Tudo bem, e você?
      </Comentario>
      

    </div>
  );
}

export default App;

