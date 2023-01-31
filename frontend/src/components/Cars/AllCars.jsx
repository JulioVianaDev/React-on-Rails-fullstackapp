import React from 'react'
import Car from './Car'
import './AllCars.css'
function AllCars(props) {
  const cars = props.cars
  return (
    <>
    <div className='ListaCarros'>

      {cars.map(car=> <Car 
        editCar={props.editCar} 
        deleteCar={props.deleteCar} 
        {...car}
        />)}
    </div>
    </>
  )
}

export default AllCars