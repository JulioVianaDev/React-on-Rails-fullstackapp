import {useEffect,useState} from 'react'
import axios from 'axios'
import Cars from './components/Cars/Cars'
import './App.css'
function App() {
  const [cars,setCars] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/api/cars")
      .then(res=> setCars(res.data))
      .catch(err=>console.log("erro no get cars: ",err))
  },[])

  const addCar =(car)=>{
    axios.post('http://localhost:3001/api/cars',{car})
      .then(res=>{
        setCars([...cars,res.data])
      })
      .catch(err=> console.log("erro ao adicionar um carro: ",car))
  }

  const editCar = (id,car)=>{
    axios.put(`http://localhost:3001/api/cars/${id}`,{car})
      .then(res=>{
        let newUpdatedList = cars.map(c=>{
          if(c.id === id){
            return res.data
          }
          return c
        })
        setCars(newUpdatedList)
      })
      .catch(err=>console.log("erro ao editar o carro: ",err))
  }

  const deleteCar=(id)=>{
    axios.delete(`http://localhost:3001/api/cars/${id}`)
      .then(res=>{
        setCars(cars.filter(c=>c.id !== id))
        alert(`o carro com o id ${id} `+ res.data.message)
      })
  }
  return (
   <>
    <Cars   cars={cars} deleteCar={deleteCar} editCar={editCar} addCar={addCar}/>
   </>
  );
}

export default App;
