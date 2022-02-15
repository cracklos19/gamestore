import Agregar from "../itemCount/onAdd"
import ItemList from "../item/itemList"


const ItemListContainer= ({title, color}) =>{ //{title: "Tú pasión, nuestra especialidad", color= "blue"}  
return (
    <div>
        <h2 style= {{color:color}}>
            {title}
        </h2>
<Agregar></Agregar>
<ItemList></ItemList>

    </div>


)
}

export default ItemListContainer