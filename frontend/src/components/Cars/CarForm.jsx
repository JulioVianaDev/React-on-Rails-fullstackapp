import React,{useState,useEffect} from 'react'
import './CarForm.css'
function CarForm({addCar,id,title,desc,ano,setEditando,editCar}) {
  const [car,setCar] = useState({title: '',desc:'', ano:''})
  useEffect(()=>{
    if(id){
      setCar({title,desc,ano})
    }
  },[])


  const handleSubmit=(e)=>{
    e.preventDefault()
    if(id){
      editCar(id,car)
      setEditando(false)
    }else{
     addCar(car)
     setCar({title: '',desc:'', ano:''})
    }
  }

  return (
    <div className={`Form ${id ? 'editando' : ''}` }>
      <h1>{id ? 'Edit' : 'Add'} a car</h1>
      <form onSubmit={handleSubmit}>
        <label>Carro:</label><br/>
        <input
          value={car.title}
          type='text'
          name='title'
          onChange={(e)=>setCar({...car,title: e.target.value})}
          required
          placeholder='Digite o nome do carro'
        /><br/>
        <label>Ano:</label><br/>
        <input
          value={car.ano}
          type='text'
          name='ano'
          onChange={(e)=>setCar({...car,ano: e.target.value})}
          required
          placeholder='Digite o ano do carro'
        /><br/>
        <label>Descrição do carro:</label><br/>
        <input
          value={car.desc}
          type='text'
          name='desc'
          onChange={(e)=>setCar({...car,desc: e.target.value})}
          required
          placeholder='Digite como é o carro'
        /><br/>
        <button type='submit'>Enviar</button>
      </form>

    </div>
  )
}

export default CarForm