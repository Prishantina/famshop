import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/> 
      <ItemListContainer/>  
      <ItemDetailContainer/> 
    </div>
  );
}

export default App;
