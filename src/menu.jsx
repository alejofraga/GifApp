import React, { useRef } from 'react';

export const Menu = ({ setCurrentState }) => {



    const hamburgerMenuRef = useRef(null);

    // Función para manejar clics en el menú hamburguesa
    const handleClick = () => {
        // Accedemos al elemento DOM utilizando la referencia y realizamos alguna acción
        hamburgerMenuRef.current.classList.toggle('active');
    };


    const handleClickIndex = () => {
        setCurrentState(1);
    }

    const handleClickTecnologiasUtilizadas = () => {
        setCurrentState(2);
    }

    const handleClickMotivacion = () => {
        setCurrentState(3);
    }


    return (
        <header>
            <div className="container">
                <div onClick={handleClickIndex} className="logo">
                    <img src="images\logo.png" alt="Logo" />
                    <h3>Gif App</h3>
                </div>

                <div className="links">
                    <ul>
                        <li><a onClick={handleClickTecnologiasUtilizadas}>Tecnologías utilizadas</a></li>
                        <li><a onClick={handleClickMotivacion}>Motivación</a></li>
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
