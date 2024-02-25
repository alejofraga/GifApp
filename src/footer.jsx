import React from 'react';
import './css/footer.css';

export const Footer = () => {
    return (
        <footer className="pie-pagina">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div className="grupo-1">
                <div className="box">
                    <figure>

                        <img src="images\alejo.jpg" alt="Alejo Fraga" />

                    </figure>
                </div>
                <div className="box">
                    <h2>Alejo Fraga</h2>
                    <p>Estudiante de ingeneria en sistemas en universidad ORT uruguay</p>
                </div>
                <div className="box">
                    <h2>SIGUEME</h2>
                    <div className="red-social">
                        <a href='https://www.linkedin.com/in/alejo-fraga' target="_blank" className="fa-brands fa-linkedin"></a>
                        <a href='https://github.com/alejofraga' target="_blank" className="fa-brands fa-github"></a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small> 2024 <b>Alejo Fraga</b></small>
            </div>
        </footer>
    );
};
