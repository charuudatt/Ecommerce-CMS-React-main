import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Component/Cart/Cart'
import Main from './Component/Main/Main';
import './App.css';

function App() {
  return (
    <div className="">
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
