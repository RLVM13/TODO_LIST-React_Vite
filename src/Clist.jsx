import React, { useState } from 'react'
import Ccard from './Ccard' // importamos otro componente
import data from './data' // importamos los datos iniciales

function list() {

  const [list, setList] = useState(data); // Es un Hook que hace Destructuracion, useState devuelve un array con 2 cosas
  // variable y metodo para modificar dicha variable, ** necesita ser importado junto a React ** Crea lista de itrms [{},{},{}]

  const paintCards = () => //usamos list.map en vez de data.map para poder modificar y no depender de los datos fijos
  list.map((item) => // Si se pone llave, se necesita return, sino quitar ambas porque no funcionaba
      <Ccard
        title={item.title}
        desc={item.desc}
        date={item.date}
      />
    )

  const clearItems = () => setList([]); // Vacia los datos

  return (
    <section>
      <h3>Listado de Tareas :</h3>
      <button onClick={clearItems}>Borrar Todo</button><br />     
      {paintCards()}
    </section>
  )
}

export default list