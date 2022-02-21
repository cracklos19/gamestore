import './itemDetail.css'
import ItemCount from "../itemCount/itemCount";

const ItemDetail = (props)=>{
    const onAdd = (parametro)=>{
        console.log(parametro)
    };
    return(
<div className="descriptionProduct" >
<h1>{props.title}</h1>
<h2>precio: {props.price}</h2>
<h3>Descripcion: {props.description}</h3>
<img src={props.pictureUrl} alt={props.title} ></img>
<ItemCount stock = {5} initial = {0} onAdd = {onAdd} />
</div>
    );
};

export default ItemDetail