import './App.css';
import './componets/cartwidget/cartwidget.css'
import './componets/navbar/navbar.css'
import Navbar2 from './componets/navbar/navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from '../src/Pages/Productos/productos.jsx'
import Ssd from './Pages/Discos Duros/ssd.jsx';
import Monitores from './Pages/Monitores/Monitores'
import Graficas from './Pages/Placas de Video/Placas de video'
import Teclados from './Pages/Teclados/Teclados'
import Item from './componets/item/item.jsx';


function App() {
  return (
    <BrowserRouter className="App">
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Productos/>}/>
        <Route path='/productos/:itemId' element={<Item/>}/>
        <Route path='/ssd' element={<Ssd/>}/>
        <Route path='/monitores' element={<Monitores/>}/>
        <Route path='/graficas' element={<Graficas/>}/>
        <Route path='/teclados' element={<Teclados/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
