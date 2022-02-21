import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import CustomFetch from "../itemListContainer/customFetch";
import { useParams } from "react-router-dom";
const {Products} = require("../api/product");

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const {idItem} = useParams();

      useEffect(() => {
        CustomFetch(2000, Products.find(item => item.id === parseInt(idItem)))
            .then((result)=> setProducts(result))
            .catch(err => alert("ERROR"));
             }, [idItem])
             return(
                 <div>
                    <ItemDetail
                    id = {products.id}
                    title = {products.title}
                    price = {products.price}
                    description = {products.description}
                    pictureUrl = {products.pictureUrl}
                    />
                 </div>
             )
    };
export default ItemDetailContainer;
