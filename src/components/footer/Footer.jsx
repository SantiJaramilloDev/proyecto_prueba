import logo from '../../assets/top-info-games_logo3.png'
import './Footer.css'

export const Footer = () => {
  return (
    <>
      <div className='body-footer'>
        <div className="container">
          <footer className="py-3">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <div className='logo'>
                  <img src={logo} alt="" />
              </div>
              </ul>
            <p className='text-center'>Developers Aleicer & Santi 2023</p>
          </footer>
        </div>
      </div>
    </>
  )
}
