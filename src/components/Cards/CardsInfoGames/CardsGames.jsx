import { useState } from 'react'
import {VentanasModales} from '../../Ventanas Modales/VentanasModales'
import './CardsGames.css'

export const CardsGames = ({title, text, image, buttonUrl, image2}) => {

  const [estadoModal, cambiarEstadoModal] = useState(false);

  return (
    <>
      <div className="card text-center">
        <img className="image" src={image} alt="..."/>
        <img className='image2' src={image2}  alt="..."/>
        <div className="card-bodyy">
          <h2 className="card-title">{title}</h2>
          <p className='card-text'>{text}</p>
          <a onClick={() => cambiarEstadoModal (!estadoModal)} className="button" target="_blank" >Ver mas</a>
        </div>
      </div>
      <VentanasModales estado = {estadoModal} cambiarEstado = {cambiarEstadoModal} title= {title} text={text} image ={image}>
      </VentanasModales>
    </>
  )
}

