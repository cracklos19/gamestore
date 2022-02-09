import "./Barranav.css"
import Boton from "../boton/boton"
import Carrito from "../carrito/carrito"

const Barranav= ({title, color}) =>{ //{title: "GAME STORE", color= "blue"}
  const handleConsolas= ()=>{
    console.log("Consolas")
  }
  const handleRetro= ()=>{
    console.log("Retro")
  }
  const handleJuegos= ()=>{
    console.log("Juegos")
  }
  const handlePerifericos= ()=>{
    console.log("Periféricos")
  }
    return (
      <nav>
              <div>
      <img src={"./images/pacman.jpg"} className= "logo" alt="logo"/>
    </div>
          <div>
          <h1 style= {{color:color}}>
     {title}
     </h1>
    </div>
    <div>
      <Boton label="Consolas" backgroundColor="black" colorText="yellow" handleClick={handleConsolas}/>
      <Boton label="Retro" backgroundColor="black" colorText="yellow" handleClick={handleRetro}/>
      <Boton label="Juegos" backgroundColor="black" colorText="yellow" handleClick={handleJuegos}/>
      <Boton label="Periféricos" backgroundColor="black" colorText="yellow" handleClick={handlePerifericos}/>
      <Carrito/>
      
    </div>
       
      </nav>
  
    )
  }

  export default Barranav