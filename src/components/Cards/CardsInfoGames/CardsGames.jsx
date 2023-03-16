import { useState } from 'react'
import {VentanasModales} from '../../Ventanas Modales/VentanasModales'
import './CardsGames.css'

export const CardsGames = ({title, text, image, image2, text2, image3, title2, text3, image4, title3, text4, image5, buttonTr, buttonSh}) => {

  const [estadoModal, cambiarEstadoModal] = useState(false);

  return (
    <>
      <div className="card text-center">
        <img className="image" src={image} alt="..."/>
        <img className='image2' src={image2}  alt="..."/>
        <div className="card-bodyy">
          <h2 className="card-title">{title}</h2>
          <p className='card-text'>{text}</p>
          <a onClick={() => cambiarEstadoModal (!estadoModal)} className="button-card" target="_blank" >Ver mas</a>
        </div>
      </div>
      <VentanasModales estado = {estadoModal} cambiarEstado = {cambiarEstadoModal} title= {title} text={text} image ={image} text2 = {text2}
      image3={image3} title2={title2} text3={text3} image4={image4} title3={title3} text4={text4} image5={image5} buttonTr={buttonTr} buttonSh={buttonSh} >
      </VentanasModales>
    </>
  )
}

