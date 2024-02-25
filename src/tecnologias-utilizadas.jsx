import React from 'react'
import './css/tecnologiasUtilizadas.css'

export const TecnologiasUtilizadas = () => {
    return (
        <div className='tecnology-container'>
        <h2>Tecnologías  utilizadas</h2>

            <div className='tecnology'>
                <img src='images\react.png'></img>
                <p>react</p>
            </div>
            <container>
                <div className='tecnology'>
                    <img src='images\javascript-logo.png'></img>
                    <p>Javascript</p>

                </div>
                <div className='tecnology'>
                    <img src='images\css.png'></img>
                    <p>CSS</p>

                </div>
                <div className='tecnology'>
                    <img src='images\html.png'></img>
                    <p>Html</p>

                </div>
            </container>



        </div>

    )
}
