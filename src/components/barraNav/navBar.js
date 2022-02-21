import Widget from '../card/widget';
import './BarraNav.css'
const BarraNav = () => {
    return(
        <div className="menu">
            <h1><a href="/index">Game Store</a></h1>
            <div>
                <ul className="listaNav">
                    <li>
                        <a href="/index">Consolas</a>
                    </li>
                    <li>
                        <a href="/index">Retro</a>
                    </li>
                    <li>
                        <a href="/index">Juegos</a>
                    </li>
                    <li>
                        <a href="/index">Periféricos</a>
                    </li>
                </ul>
            </div>
            <div>
                <input type="text" placeholder="Buscar"></input>
                <button className="butSerch">Buscar</button>
            </div>
            <Widget />
        </div>
    );
}

export default BarraNav;