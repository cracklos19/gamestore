const Boton= ({label, backgroundColor, colorText, handleClick})=>{
    return (
        <button style= {{backgroundColor, color:colorText}} onClick={handleClick} > {label} </button>
    )
};

export default Boton