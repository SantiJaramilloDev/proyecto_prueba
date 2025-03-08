import logo from '../../assets/top-info-games_logo4.png'
import { useNavigate } from 'react-router-dom'
import './Header.css'

export const Header = () => {

  const history = useNavigate();

  return (
    <>
      <header>
        <div className='container__menu'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='menu'>
            <button className='button-header' onClick={() => history('/')}>Inicio</button>
            <button className='button-header' onClick={() => history('/app-gif')}>Gift</button>
            <button className='button-header' onClick={() => history('/info-games')}>Juegos</button>
            {/* <button className='button-header' onClick={() => history('/app-gif')}>Login</button> */}
          </div>
        </div>
      </header>
    </>
  )
}
