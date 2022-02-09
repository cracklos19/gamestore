const Itemlist= ({title, color}) =>{ //{title: "Tú pasión, nuestra especialidad", color= "blue"}  
return (
    <div>
        <h2 style= {{color:color}}>
            {title}
        </h2>
    </div>
)
}

export default Itemlist