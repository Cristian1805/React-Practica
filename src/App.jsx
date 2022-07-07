import './App.css';
import  Contador  from './componentes/Contador';
import Listado from './componentes/Listado';
import Temperatura from './componentes/Temperatura';

function App() {
  return (
    <div className="App">
     <h1>Titulo del primer proyecto</h1>
     <Contador></Contador>
     <Listado></Listado>
     <Temperatura> </Temperatura>
    </div>
  );
}

export default App; 
