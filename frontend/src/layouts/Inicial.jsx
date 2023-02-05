import React from 'react'
import './Inicial.css'
import luffy from '../images/luffy.png'
function Inicial() {
  return (
    <div className=' p-5 w-full h-full flex flex-col justify-center justify-center'>
      <div>
        <h1 className='text-xl'>
          Criando um site Fullstack com rails e react
        </h1>
      </div>
      <img src={luffy} alt="luffy"/>
    </div>
  )
}

export default Inicial