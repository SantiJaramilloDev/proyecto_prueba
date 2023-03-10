import './CardsGames.css'

export const CardsGames = ({title, text, image, buttonUrl,image2}) => {

  return (
    <>
      <div className="card text-center">
        <img className="image" src={image} alt="..."/>
        <img className='image2' src={image2}  alt="..."/>
        <div className="card-bodyy">
          <h2 className="card-title">{title}</h2>
          <p className='card-text'>{text}</p>
          <a href={buttonUrl} className="button" target='_blank'>Ver más</a>
          </div>
      </div>
    </>
  )
}

