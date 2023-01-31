import React from 'react'
import AllCars from './AllCars'
import CarForm from './CarForm'
import './Cars.css'
function Cars({editCar,addCar,deleteCar,cars}) {
  return (
    <>
      <CarForm addCar={addCar}/>
      <AllCars
        editCar={editCar}
        deleteCar={deleteCar}
        cars={cars}
      />
    </>
  )
}

export default Cars