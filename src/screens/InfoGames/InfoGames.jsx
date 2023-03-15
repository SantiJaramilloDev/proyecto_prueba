import { CardsGames } from "../../components/Cards/CardsInfoGames/CardsGames"
import { Footer } from "../../components/footer/Footer";
import './InfoGames.css'

export const InfoGames = () => {

  const games = [
    {
      id: '1',
      title: 'GTA V',
      image: 'https://assets.reedpopcdn.com/gta-5-na-pc-recenzja-1429042364982.jpg/BROK/thumbnail/1600x900/quality/100/gta-5-na-pc-recenzja-1429042364982.jpg',
      text: 'Grand Theft Auto V es un juego de acción y aventuras desarrollado por Rockstar North y publicado por Rockstar Games',
      buttonUrl: 'https://www.rockstargames.com/es/gta-v',
      image2: 'https://www.gamerfocus.co/wp-content/uploads/2015/05/GTAV.jpg'
    },
    {
      id: '2',
      title: 'Minecraft',
      image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/12/minecraft-2575225.jpg?itok=9zF9u5WE',
      text: 'Minecraft es un videojuego de construcción de tipo mundo abierto o sandbox creado originalmente Markus Persson. Posteriormente desarrollado por Mojang Studios​',
      buttonUrl: 'https://www.minecraft.net/es-es',
      image2: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/07/minecraft-2768571.jpg?itok=EFtL_k8F'
    },
    {
      id: '3',
      title: 'Paladins',
      image: 'https://i.blogs.es/0ba3c2/paladins0/1366_2000.jpg',
      text: 'Paladins: Champions of the Realm es un videojuego gratuito en línea de disparos en primera persona con componentes de hero shooter',
      buttonUrl: 'https://www.paladins.com/',
      image2: 'https://www.gamerfocus.co/wp-content/uploads/2018/12/Paladins-0.jpg'
    },
    {
      id: '4',
      title: 'Brawl Stars',
      image: 'https://blog.brawlstars.com/uploaded-images/_549x308_crop_center-center_90/691681060_1670827244.jpg?mtime=20221212064044',
      text: 'Brawl Stars es un campo de batalla en línea multijugador y un videojuego de disparos de héroes en tercera persona desarrollado y publicado por la compañía de videojuegos finlandesa Supercell',
      buttonUrl: 'https://supercell.com/en/games/brawlstars/',
      image2: 'https://www.movilzona.es/app/uploads-movilzona.es/2022/08/todos-personajes-brawl-stars.jpg'
    }];

  return (
    <>
      <div className="body-card">
        <div className="container">
          <div className="row">
            {
              games.map(card => (
                <div className="col-md-6" key={card.id}>
                  <CardsGames  title={card.title} text={card.text} image={card.image} buttonUrl={card.buttonUrl} image2={card.image2} />
                </div>
              ))
            }
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}