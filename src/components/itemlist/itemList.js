import Item from './item/item';

const ItemList = (props)=>{
    return(
        <div>
            {props.products.map((p)=>{
                return(<Item key = {p.id} title={p.title} price={p.price} pictureUrl={p.pictureUrl}/>)
            })}
        </div>
    );
};
export default ItemList