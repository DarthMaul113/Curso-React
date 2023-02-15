import {  Nav } from "react-bootstrap"
import '../../css/header.css'

function Header() {
    return (
        <header class="container">
            <div class="wrapper ">
                <h1><Nav.Link href="/" >La Tiendita del Cachito</Nav.Link></h1>
            </div>
        </header>
    )
}

export default Header