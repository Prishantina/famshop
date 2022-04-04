import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  const title = "Menú"

  return (
    <div className="App">
      <ItemListContainer greetings={"Bienvenidos"}/>
      <NavBar name = {title} />
      
      <Header />      
    </div>
  );
}

export default App;
