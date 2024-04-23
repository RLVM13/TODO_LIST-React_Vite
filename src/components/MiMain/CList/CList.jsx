import React, { useState } from 'react'
import Ccard from './Ccard' // importamos otro componente
import data from './data' // importamos los datos iniciales
import './CList.css'

function list() {

  const [list, setList] = useState(data); // Es un Hook que hace Destructuracion, useState devuelve un array con 2 cosas
  // variable y metodo para modificar dicha variable, ** necesita ser importado junto a React ** Crea lista de items [{},{},{}]

  const [values, setValues] = useState({ //nuevo estado de "Values"
    title: "",
    date: "",
    isDone: false
  })

  const paintCards = () => //usamos list.map en vez de data.map para poder modificar y no depender de los datos fijos
    list.map((item, index) => // Si se pone llave, se necesita return, sino quitar ambas porque no funcionaba
      <Ccard
        key={index}
        title={item.title}
        date={item.date}
        isDone={item.isDone}
        delete={() => deleteItem(index)}
        edit={() => editItem(index)} //Le pasamos por props la funcion al hijo
      />
    )

  const clearItems = () => setList([]); // Vacia los datos

  const resetItems = () => setList(data); // resetea la lista -> list=data

  const deleteItem = (pos) => {
    alert("Tarea Borrada");
    const remainingItems = list.filter((item, i) => i !== pos); //filtra el array y lo devuelve sin la posicion indicada
    setList(remainingItems); //modifica el estado con lo restante
  }
/* 
  const editItem = (pos) => {
    <div>
      <h3>Editar Tarea:</h3>
      <form>
        <p>Tarea: {values.title}</p>
        <p>Fecha: {values.date}</p>
      </form>
    </div>
    /const title = pos.target.elements.title.value; // e.target.elements.title.value;
    const date = pos.target.elements.date.value; 
     alert("Tarea Actualizada"); 
  } */

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value; // e.target.elements.title.value;
    const date = e.target.elements.date.value;
    const isDone = e.target.elements.isDone.value;
    setTimeout(() => { alert("Tarea Creada!"); }, 1000);

    const item = { title, date, isDone }; //Nuevo objeto
    setList([...list, item]); //Añade el nuevo destino a la lista
    console.log("********");
    console.log(item);
    console.log(list);

    e.target.elements.title.value = "";
    e.target.elements.date.value = "";
    e.target.elements.isDone.value = false;
  }

  const handleChange = (e) => { /* Conserva el objeto que tengas y usa el valor que cambie */
    console.log(e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Tarea</label><br />
        <input type="text" name="title" minLength={6} onChange={handleChange} /><br />
        <input type="date" name="date" onChange={handleChange} /><br />
        <label htmlFor="Status">Realizada?</label>
        <input type="radio" name="isDone" value="true" onChange={handleChange} /> True
        <input type="radio" name="isDone" value="false" onChange={handleChange} /> False <br />

        {values.title && values.date && values.isDone ?
          <button type="submit">Add</button>
          : <></>} {/* otra forma de indicar null */}
      </form>


      <h3>Listado de Tareas :</h3>
      <button class="css-button-fully-rounded--green" onClick={clearItems}>Clear</button>
      <button class="css-button-fully-rounded--green" onClick={resetItems}>Reset</button>
      {paintCards()}
    </section>
  )
}

export default list