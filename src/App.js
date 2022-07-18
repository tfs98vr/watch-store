import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { useState } from 'react';

function App(props) {
  const [selected, setSelected] = useState([]);

  const getInfoFromShop = (val) => {
    let tempArr = selected;
    tempArr.push(val);
    setSelected(tempArr);
  }

  const updateSelected = (val) => setSelected(val);

  return (
    <BrowserRouter>
      <div className='App'> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Shop sendInfo={getInfoFromShop} />} />
          <Route path='/cart' element={<Cart update={updateSelected} watches={selected} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
