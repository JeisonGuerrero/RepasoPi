import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='containerLanding'>
      <div className='ContenedorBtn'>
        <div className='ContenidoBtn'>
          <div className='Landing'>
            <h1 className='msg'> Todos vamos a morir. <br></br>Ven a ver la televisión.</h1>
            <Link to='/Home'>
              <button className='BntBienvenido'>Inicio</button>
            </Link>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Landing