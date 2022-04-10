import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = (props) => {
    return(
        <div>
            <nav>
                <h2>{props.name}</h2>
           
                    <ul className ="Navegacion">
                         <li><a href="#">Home</a></li>
                         <li><a href="#">Productos</a></li>
                         <li><a href="#">Contacto</a></li>
                         <li><CartWidget/></li>
                    </ul>
            </nav>
        </div>
    
    )
};

export default NavBar;