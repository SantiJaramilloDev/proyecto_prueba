import React from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../../assets/top-info-games_logo3.png'
import imgHome from '../../assets/58670.svg'
import './home.css'

export const Home = () => {

  const history = useNavigate();

  return (
    <>
        {/* <h1>A donde deseas dirigirte</h1>
        <button onClick={() => history('/app-gif')}>App of gif</button>
        <button onClick={() => history('/info-games')}>Info-Games</button> */}
        <header>
          <div className='container__menu'>
            <div className='logo'>
              <img src={logo} alt=''/>
            </div>
            <div className='menu'>
              <nav>
                <ul>
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Gift</a></li>
                  <li><a href="#">Juegos</a></li>
                  <li><a href="#">Perfil</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main>
          <div className="container__cover">
            <div className="cover">
              <div className="text">
                <h1>Top Info Games</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos fuga ipsam saepe cupiditate assumenda fugiat eos ducimus expedita asperiores sed.</p>

                <input type='button' value='Leer Más' />
              </div>
              <div className="svg">
                <img src={imgHome} alt='' />
              </div>
            </div>
          </div>
        </main>
    </>
  )
}
