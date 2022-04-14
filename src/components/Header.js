import Logo from '../imagenes/Logo-F.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <header className = "navegacion">
            <Link to='/'>
            <img src={Logo} alt="logo"/>
            </Link>
           
        </header>
    )
};

export default Header;