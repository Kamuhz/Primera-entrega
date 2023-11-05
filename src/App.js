import './App.css';
import './componets/cartwidget/cartwidget.css';
import './componets/navbar/navbar.css';
import Navbar2 from './componets/navbar/navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Pages/Productos/productos';
import Item from './componets/item/item';
import SsdPage from './Pages/Discos Duros/ssd.jsx'
import MonitoresPage from './Pages/Monitores/Monitores.jsx';
import PlacasDeVideoPage from './Pages/Placas de Video/PlacasDeVideo.jsx'
import TecladosPage from './Pages/Teclados/Teclados.jsx'
import Home from './Pages/Home/home';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar2 />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/productos' element={<Products/>}/>
        <Route path='productos/:itemId' element={<Item/>}/>
        <Route path='/ssd' element={<SsdPage/>}/>
        <Route path='ssd/:itemId' element={<Item/>}/>
        <Route path='/monitores' element={<MonitoresPage/>}/>
        <Route path='monitores/:itemId' element={<Item/>}/>
        <Route path='/graficas' element={<PlacasDeVideoPage/>}/>
        <Route path='graficas/:itemId' element={<Item/>}/>
        <Route path="teclados" element={<TecladosPage/>} />
        <Route path='teclados/:itemId' element={<Item/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
