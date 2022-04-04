import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import Counter from "../Counter/Counter";

const NavBar = (props) => {
    return(
        
        <nav>
            <h2>{props.name}</h2>
           
            <ul className ="Navegacion">
                <li><a href="#">Home</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <li><CartWidget/></li>
            </ul>
            <><Counter/></>
        </nav>
    )
};

export default NavBar;