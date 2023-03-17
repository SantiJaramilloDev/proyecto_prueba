import React from 'react'
import imgHome from '../../assets/58670.svg'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/footer/Footer'
import './home.css'

export const Home = () => {



  return (
    <>
      <Header />
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
        <Footer />
      </main>
    </>
  )
}
