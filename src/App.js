import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <NavBar/> 
      <Routes>
        <Route path='/list' element={<ItemListContainer/>} />
        <Route path='/detail' element={<ItemDetailContainer/>} />
      </Routes>

      </BrowserRouter>
     

      
     
    </div>
  );
}

export default App;
