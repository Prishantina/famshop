import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import getProducts from "../products";

const ItemListContainer = () => {
    const [count, setCount] = useState(1);
    const [products, setProducts] = useState([])
    useEffect(()=>{
       getProducts().then(products => setProducts(products)).catch(error=>console.log(error));
    },[])
    const onAdd = (condition) => {
        if(condition === '-'){
            setCount(count - 1);
        } 
        if(condition === '+'){
            setCount(count + 1)
        }
    };
    const initial = 1;
    const stock = 10;
    return (
        <div>
            {products.map((product) =>(
                <div>
                    <h2>{product.name}</h2>
                    <img src={product.img}/>
                    <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count}/>  
                </div>
            ))}
         
        </div>
       
     );
  };
    

export default ItemListContainer;