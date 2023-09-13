import './App.css';
import './componets/cartwidget/cartwidget.css'
import './componets/navbar/navbar.css'
import Navbar2 from './componets/navbar/navbar.jsx'
import Itemlistcontainer from './componets/itemlistcontainer/itemlistcontainer'

function App() {
  return (
    <div>

      <Navbar2/>

    <div>

      <Itemlistcontainer greeting="Bienvenidos a Gp Computación"/>

    </div>
    </div>
  );
}

export default App;
