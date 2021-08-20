import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return(
        <div className="container-nav">
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="link">Cursos</Link>
                    </li>
                    <li>
                        <Link to="/adicionar-cursos" className="link">Registrar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}