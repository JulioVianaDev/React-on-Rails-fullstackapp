import {useEffect,useState} from 'react'
import axios from 'axios'
import Cars from './components/Cars/Cars'
import './App.css'
import {Routes,Route} from 'react-router'
import Inicial from './layouts/Inicial'
import Navbar from './layouts/Navbar'
import About from './layouts/About'
import Erro from './components/Erro/Erro'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Galeria from './layouts/Galeria'
import './index.css'
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
      .catch(err=> console.log("erro ao adicionar um carro: ",err))
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

  const images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/301',
    'https://picsum.photos/200/302',
  ];

  return (
   <>

   <Navbar/>
   <Routes>
    <Route path='/galeria' element={<Galeria images={images}/>}/>
    <Route path='/' element={<Inicial/>} />
    <Route path='/*' element={<Erro/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>

    <Route path='/cars' element={ 
                                  <Cars   
                                    cars={cars} 
                                    deleteCar={deleteCar} 
                                    editCar={editCar} 
                                    addCar={addCar}
                                  />
                                }   
    />
   </Routes>
    
   </>
  );
}

export default App;
