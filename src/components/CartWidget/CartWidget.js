import carritoCompras from "./carritoCompras.jpg"
import "./CartWidget.css"

const CartWidget = () =>{
    return (
        <div className="Dibujo">
            <img src={carritoCompras} className="Carro"/>
            <p>1</p>
        </div>
    )
}

export default CartWidget