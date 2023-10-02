import './App.css';
import './componets/cartwidget/cartwidget.css';
import './componets/navbar/navbar.css';
import Navbar2 from './componets/navbar/navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './Pages/Productos/productos';
import Item from './componets/item/item';
import Ssd from './Pages/Discos Duros/ssd';
import Monitores from './Pages/Monitores/Monitores'
import Graficas from './Pages/Placas de Video/PlacasDeVideo';
import Teclados from './Pages/Teclados/Teclados';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar2 />
      <Routes>
        <Route path='/Catalogo' element={<Productos/>}/>
        <Route path='Catalogo/:itemId' element={<Item/>}/>
        <Route path='/ssd' element={<Ssd/>}/>
        <Route path='ssd/:itemId' element={<Item/>}/>
        <Route path='/monitores' element={<Monitores/>}/>
        <Route path='monitores/:itemId' element={<Item/>}/>
        <Route path='/graficas' element={<Graficas/>}/>
        <Route path='graficas/:itemId' element={<Item/>}/>
        <Route path="teclados" element={<Teclados/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
