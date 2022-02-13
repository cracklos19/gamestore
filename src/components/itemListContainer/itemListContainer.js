import Agregar from "../itemCount/onAdd"

const Itemlist= ({title, color}) =>{ //{title: "Tú pasión, nuestra especialidad", color= "blue"}  
return (
    <div>
        <h2 style= {{color:color}}>
            {title}
        </h2>
<Agregar></Agregar>
    </div>


)
}

export default Itemlist