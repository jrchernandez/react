import React from 'react';
import {Link} from 'react-router-dom';
export default Sintomas;


function Sintomas() {
    return(
        <div className="Sintomas">
            <Link to='/home'>Sintomas</Link>
            <p>Hii</p>
        </div>
    );
}