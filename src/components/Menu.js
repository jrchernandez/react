import React from 'react';
import './menu.css';

export default Menu;

function Menu() {
    return(

        // <BrowserRouter>
        //     <div>
        //     <Route component={Sintomas} />
            
        //     </div>
        // </BrowserRouter>
        <div className="Menu-vertical">
        <ul className="Menu-link" >
            <li>
                <a 
                href="https://www.google.com.mx/"
                target="_blank"
                color= "#FF0000"
                >
                    Inicio
                </a>
            </li>

            <li>
                <a
                href="https://www.google.com.mx/"
                target="_blank"
                >
                    Sintomas
                </a>
            </li>
            <li>
                <a 
                href="https://www.google.com.mx/"
                target="_blank"
                >
                    Prevención
                </a>
            </li>
            <li>
                <a 
                href="https://www.google.com.mx/"
                target="_blank"
                >
                    Tratamientos
                </a>
            </li>
        </ul>
    </div>
    );
}