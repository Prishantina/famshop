import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/> 
      <ItemListContainer/>   
    </div>
  );
}

export default App;
