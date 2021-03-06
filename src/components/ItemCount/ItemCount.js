import React, {useState} from 'react';

const ItemCount = ({onAdd, stock, initial, count}) =>{
    return(
        <div>
            <button onClick={() =>{if (count > initial) {onAdd('-')}}}>-</button>
            <p>{count}</p>
            <button onClick={() =>{if(count < stock) {onAdd('+')}}}>+</button>
        </div>
    )
}

export default ItemCount;