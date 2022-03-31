import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  const title = "menu"

  return (
    <div className="App">
      <Header />
      <ItemListContainer greetings={"Bienvenidos"}/>
      <NavBar name = {title} />
    </div>
  );
}

export default App;
