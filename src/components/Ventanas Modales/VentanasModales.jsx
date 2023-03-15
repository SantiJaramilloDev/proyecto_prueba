import './VentanasModales.css'

export const VentanasModales = ({ title, text, image, estado, cambiarEstado }) => {
  return (
    <>
      { estado &&
          <div className="body-vm">
            <div className='container1'>
              <div className="header-vm">
                <h4>Top Info Games</h4>
              </div>
              <button className='button-close' onClick={() => cambiarEstado(false)}>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
              <div className='content-vm'>
                <h2 className='title-vm'>{title}</h2>
                <p className='text-vm'>{text}</p>
                <img className='image-vm' src= {image} alt="" />
            </div>
          </div>
        </div>
      }
    </>
  )
}
