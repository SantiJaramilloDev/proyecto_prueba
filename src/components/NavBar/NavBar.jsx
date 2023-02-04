import { useNavigate } from 'react-router-dom'
import logo from '../../assets/top-info-games_logo3.png'
import './NavBar.css'

export const NavBar = () => {
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
                  <div className='btn btn-outline-primary menu-div'>
                    <li><a onClick={() => history('/app-gif')}>Inicio</a></li>
                  </div>
                  <div className='btn btn-outline-primary menu-div'>
                    <li><a onClick={() => history('/app-gif')}>Gift</a></li>
                  </div>
                  <div className='btn btn-outline-primary menu-div'>
                    <li><a onClick={() => history('/info-games')}>Juegos</a></li>
                  </div>
                  <div className='btn btn-outline-primary menu-div'>
                    <li><a onClick={() => history('/app-gif')}>Perfil</a></li>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </header>
    </>
  )
}
