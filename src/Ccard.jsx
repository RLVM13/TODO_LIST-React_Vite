import React from 'react'

function Ccard(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <p>{props.date}</p>
      <button onClick={()=>props.delete()}>Borrar</button><br />
    </article>
  )
}

export default Ccard