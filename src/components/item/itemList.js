import Products from "../item/item";
import { useEffect, useState } from "react";

const getProducts= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(Products)
        }, 3000);

    }
    )
}




const ItemList= (props)=>{
    const [products, setProducts]= useState([])
useEffect(()=>{
getProducts().then(Products =>{
   setProducts(Products) 

})
}, [])
console.log(products)

    return (
        <ul> {products.map(product=>{
            return <li key={product.id} > {product.title} </li>
        })} </ul>
    )
   
    };


export default ItemList


