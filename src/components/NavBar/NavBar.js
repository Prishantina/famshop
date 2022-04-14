import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return(
        <div>
            <nav>
                <h2>{props.name}</h2>
           
                    <ul className ="Navegacion">
                         <li>Home</li>
                         <li><Link to='/list'>Productos</Link></li>
                         <li><Link to='/detail'>Detalle</Link></li>
                         <li><CartWidget/></li>
                    </ul>
            </nav>
        </div>
    
    )
};

export default NavBar;