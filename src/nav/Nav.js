import React from 'react'
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../nav/nav.css'
export default function Nav() {
    return (
        <div className="nav">
              <Link to="/"> <img src={Logo} width="45" height="45" /></Link> 
                <nav className="menu">
                    
                    <ul>
                       <Link to="/"><li><a href="default.asp">Inicio</a></li></Link> 
                        <li><a href="#footerbar">Converter</a></li>
                        <li><a href="http://instagram.com.br/manoheelio" target="blank" >Desenvolvedor</a></li>
                    </ul>
                </nav>
            </div>
    )
}
