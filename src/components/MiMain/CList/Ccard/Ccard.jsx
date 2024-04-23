import React from 'react'
import './Ccard.css'

function Ccard(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.date}</p>
      <p>{props.isDone}</p>
      <button class="css-button-sharp--sky" onClick={()=>props.delete()}>Borrar</button>
      <button class="css-button-sharp--sky" onClick={()=>props.edit()}>Editar</button><br />
    </article>
  )
}

export default Ccard
