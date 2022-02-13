import { useState } from "react";
const ItemCount = (props) =>{

    const [ProductosCarro, setProductosCarro] = useState(props.initial);

    const increment = ()=>{
        if(ProductosCarro !== props.stock )
        setProductosCarro(ProductosCarro + 1)
    };
    const reduction = ()=>{
        if(ProductosCarro !== props.initial )
        setProductosCarro(ProductosCarro - 1)};


    return(

    <div>
        <p onClick={reduction}>-</p>
        <div>{ProductosCarro}</div>
        <p onClick={increment}>+</p>
        <button onClick={()=>props.onAdd(ProductosCarro)}>AGREGAR AL CARRO DE COMPRAS</button>
    </div>);
};

export default ItemCount