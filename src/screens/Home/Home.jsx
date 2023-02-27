import React from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../../assets/top-info-games_logo3.png'
import imgHome from '../../assets/58670.svg'
import { Footer } from '../../components/footer/Footer'
import './home.css'

export const Home = () => {

  const history = useNavigate();

  return (
    <>
      <header>
        <div className='container__menu'>
          <div className='logo'>
            <img src={logo} alt=''/>
          </div>
          <div className='menu'>
            <nav>
              <ul>
                <div className='btn btn-outline-primary'>
                  <li><a onClick={() => history('/app-gif')}>Inicio</a></li>
                </div>
                <div className='btn btn-outline-primary'>
                  <li><a onClick={() => history('/app-gif')}>Gift</a></li>
                </div>
                <div className='btn btn-outline-primary'>
                  <li><a onClick={() => history('/info-games')}>Juegos</a></li>
                </div>
                <div className='btn btn-outline-primary'>
                  <li><a onClick={() => history('/app-gif')}>Perfil</a></li>
                </div> 
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
        <Footer/>
      </main>
    </>
  )
}
