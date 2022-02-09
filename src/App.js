
import './App.css';
import Barranav from './components/Barranav/Barranav';
import Itemlist from './components/itemListContainer/itemListContainer';
function App() {
  return (
    <div className="App">
     <Barranav title= "GAME STORE" color= "blue" />
     <Itemlist title="Tú pasión, nuestra especialidad" color= "blue"/>
    </div>
  );
}

export default App;
