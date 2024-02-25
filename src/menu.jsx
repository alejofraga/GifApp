import React, { useRef } from 'react';

export const Menu = () => {



    const hamburgerMenuRef = useRef(null);

    // Función para manejar clics en el menú hamburguesa
    const handleClick = () => {
        // Accedemos al elemento DOM utilizando la referencia y realizamos alguna acción
        hamburgerMenuRef.current.classList.toggle('active');
    };


    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src="images\logo.png" alt="Logo" />
                    <h3>Gif App</h3>
                </div>

                <div className="links">
                    <ul>
                        <li><a href="#">Sobre mi</a></li>
                        <li><a href="#">Tecnologias utilizadas</a></li>
                        <li><a href="#">Motivacion</a></li>
                    </ul>
                </div>

                <div className="overlay"></div>

                <div onClick={handleClick} ref={hamburgerMenuRef} className="hamburger-menu">
                    <div className="bar"></div>
                </div>
            </div>
        </header>
    )
}
