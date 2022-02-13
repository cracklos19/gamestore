import ItemCount from "../itemCount/itemCount"

const Agregar = (props) =>{
    const onAdd = (parametro)=>{
            console.log(parametro)
        };
    return(
    <div>
    <p>{props.greeting}</p>
    <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
    </div>  );
    };
    
    export default Agregar