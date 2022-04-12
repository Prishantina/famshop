import {useState, useEffect} from "react";
import getProductsById from "../ItemDetail/ItemDetail"; 

const ItemDetailContainer = () =>{
    
    const [productos, setProductos]= useState([])

    useEffect(()=>{
        getProductsById().then(productos => setProductos(productos)).catch(error=>console.log(error));
     },[])
    /*  const onAdd = (condition) => {
         if(condition === '-'){
             setCount(count - 1);
         } 
         if(condition === '+'){
             setCount(count + 1)
         }
     };
     const initial = 1;
     const stock = 10; */
     return (
         <div>
             {productos.map((producto) =>(
                 <div>
                     <h2>{producto.name}</h2>
                     <img src={producto.img}/>
                     {/* <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count}/>   */}
                 </div>
             ))}
          
         </div>
        
      )

   /*  useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=iphone").then(response =>{
            return response.json()
        })
        .then(r => {
            setProductos(r.results)
        })
    }, [])
    console.log(productos)

    return(
        <div>
            <h1>Hola</h1>
            <ul>
                {productos.map(prod => 
                <li key={prod.id}>{prod.title}
                <p>{prod.price}</p>
                <img src={prod.thumbnail} alt={prod.title}/></li>)}
                
            </ul>
            
              
        </div>
        
    ) */
    
}










export default ItemDetailContainer