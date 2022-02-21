import { useState, useEffect } from 'react';
import ItemList from '../itemlist/itemList';
import './itemListContainer.css';
import { useParams } from 'react-router-dom';
import CustomFetch from './customFetch'
import Products from '../api/product';

const ItemListContainer = () =>{

    const [products, setProducts] = useState([]);
    const {idCategory} = useParams();
    
    useEffect(()=> {
        if(idCategory === undefined){
            CustomFetch(2000, Products)
                .then(result=> setProducts(result))
                .catch(err => alert("ERROR"));
        } else{
            CustomFetch(2000, Products.filter(item => item.categoryId === parseInt(idCategory)))
                .then((result)=> setProducts(result))
                .catch(err => alert("ERROR"));
        }
    }, [idCategory]);
    
    return(
    <div className="productos">
    <ItemList products={products} />
    </div>  );
    };
    
    export default ItemListContainer