import { useState, useEffect } from "react";
import getProductsById from "../productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer =()=> {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() =>{
        getProductsById(productId).then(item =>{
            setProduct(item)
        }).catch(error => {
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })
    },[])

    return (
        <div>
            <p>Detalle</p>
        </div>
    )
}

export default ItemDetailContainer;