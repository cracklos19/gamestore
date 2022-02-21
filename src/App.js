import './App.css';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import BarraNav from './components/barraNav/navBar';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<BarraNav />
<Routes>
  <Route path='/' element={<ItemListContainer />}/>
  <Route path='/category/:categoryId' element={<ItemListContainer />}/>
  <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
</Routes>
</BrowserRouter>

  );
}

export default App;