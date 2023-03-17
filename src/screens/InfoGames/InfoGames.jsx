import { CardsGames } from "../../components/Cards/CardsInfoGames/CardsGames"
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/Footer";
import './InfoGames.css'

export const InfoGames = () => {

  const games = [
    {
      id: '1',
      title: 'GTA V',
      image: 'https://assets.reedpopcdn.com/gta-5-na-pc-recenzja-1429042364982.jpg/BROK/thumbnail/1600x900/quality/100/gta-5-na-pc-recenzja-1429042364982.jpg',
      text: 'Grand Theft Auto V es un juego de acción y aventuras desarrollado por Rockstar North y publicado por Rockstar Games',
      image2: 'https://www.gamerfocus.co/wp-content/uploads/2015/05/GTAV.jpg',
      // informacion de relleno para el modal
      text2: 'Un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, y tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros.',
      image3: 'https://thumbs.dreamstime.com/b/pel%C3%ADcula-vectorial-del-logotipo-s%C3%ADmbolo-gta-v-grand-hurcar-auto-es-un-juego-de-aventura-desarrollado-por-rockstar-north-y-202507286.jpg',
      title2: 'Gráficos impresionantes',
      text3: 'Niveles de fidelidad y rendimiento mejorados, con nuevos modos de gráficos que ofrecen resoluciones de hasta 4K, 60 fotogramas por segundo, opciones HDR, trazado de rayos, mejoras en la calidad de las texturas y mucho más.',
      image4: 'https://media-rockstargames-com.akamaized.net/tina-uploads/posts/ak73k92o47ko75/5de9d8bc4ffeabb209ec67ab3721ea281da5cd05.jpg',
      title3: 'Controles inmersivos',
      text4: 'Experimenta nuevos niveles de reacción con la respuesta háptica y la resistencia dinámica gracias a los gatillos adaptativos del mando inalámbrico DualSense de PlayStation®5: siente desde el daño direccional hasta los efectos atmosféricos, los baches de las carreteras, las explosiones y mucho más.',
      image5: 'https://as01.epimg.net/meristation/imagenes/2015/02/27/noticia/1425056880_270250_1532457704_sumario_normal.jpg',
      buttonTr: 'https://www.rockstargames.com/es/gta-v?info=trailer',
      buttonSh: 'https://www.rockstargames.com/es/gta-v?info=order'
    },
    {
      id: '2',
      title: 'Minecraft',
      image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/12/minecraft-2575225.jpg?itok=9zF9u5WE',
      text: 'Minecraft es un videojuego de construcción de tipo mundo abierto o sandbox creado originalmente Markus Persson. Posteriormente desarrollado por Mojang Studios​',
      image2: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/07/minecraft-2768571.jpg?itok=EFtL_k8F',
      // informacion de relleno para el modal
      text2: 'Minecraft se basa en explorar y construir con un único objetivo: sobrevivir. Aunque los gráficos son bastante sencillos, se ha convertido en el videojuego más vendido de la historia con más de 176 millones de copias.',
      image3: 'https://www.minecraft.net/content/dam/games/minecraft/marketplace/mediablock-buzzybees.jpg',
      title2: 'Utiliza el ingenio',
      text3: 'Sé hábil y usa el entorno circundante para recopilar material de construcción. Observa cómo derribar árboles te puede ayudar a crear algo nuevo.',
      image4: 'https://www.minecraft.net/content/dam/games/minecraft/screenshots/RayTracing-MineCraft-PMP-Always-Something-New.jpg',
      title3: 'Sobrevive a la noche',
      text4: 'Siempre es mejor evitar lo impredecible distanciándote de las criaturas errantes: ¡nunca sabes qué puede pasar si te acercas demasiado!',
      image5: 'https://www.minecraft.net/content/dam/minecraft/pmp/pmp-minecraft-howitworks-survive.png',
      buttonTr: 'https://www.youtube.com/watch?v=jMe3tdyjouM',
      buttonSh: 'https://www.minecraft.net/es-es/get-minecraft'
    },
    {
      id: '3',
      title: 'Paladins',
      image: 'https://i.blogs.es/0ba3c2/paladins0/1366_2000.jpg',
      text: 'Paladins: Champions of the Realm es un videojuego gratuito en línea de disparos en primera persona con componentes de hero shooter',
      image2: 'https://www.gamerfocus.co/wp-content/uploads/2018/12/Paladins-0.jpg',
      // informacion de relleno para el modal
      text2: 'la sensación de juego de disparos en equipo de fantasía gratuito! Únete a más de 30 millones de jugadores para convertirte en un campeón legendario del reino, personalizando tu conjunto básico de habilidades para jugar exactamente como quieres jugar.',
      image3: 'https://cdn.cloudflare.steamstatic.com/steam/apps/444090/ss_a7b17261c8bb57913f6e7ceb7c248da555799802.1920x1080.jpg?t=1677158809',
      title2: 'Construye tu mazo',
      text3: 'No importa cuál sea tu estilo de juego, lo encontrarás en Paladins. Con el sistema de construcción de mazos de Paladins, puedes convertirte en un francotirador con miras de hierro, un experto en explosivos que lanza granadas o una estrella de carreras con un rifle de asalto, todo como el mismo Campeón.',
      image4: 'https://webcdn.hirezstudios.com/paladins/assets/buildyourdeck.png',
      title3: 'Personaliza tu campeon',
      text4: 'Diosa antigua. Cazarrecompensas interestelar. Pirata despiadado. Gigante de escarcha. Puedes ser todo esto y más en Paladins.',
      image5: 'https://webcdn.hirezstudios.com/paladins/assets/customizeyourchamps.png',
      buttonTr: 'https://www.youtube.com/watch?v=g4WHiMVq1-8',
      buttonSh: 'https://www.paladins.com/play-for-free'
    },
    {
      id: '4',
      title: 'Brawl Stars',
      image: 'https://blog.brawlstars.com/uploaded-images/_549x308_crop_center-center_90/691681060_1670827244.jpg?mtime=20221212064044',
      text: 'Brawl Stars es un campo de batalla en línea multijugador y un videojuego de disparos de héroes en tercera persona desarrollado y publicado por la compañía de videojuegos finlandesa Supercell',
      image2: 'https://www.movilzona.es/app/uploads-movilzona.es/2022/08/todos-personajes-brawl-stars.jpg',
      // informacion de relleno para el modal
      text2: '¡Hora de PELEAR! ¡Únete a tus amigos y prepárate para el épico MAYHEM multijugador! Brawl Stars es el juego más nuevo de los creadores de Clash of Clans y Clash Royale. Salta a tu modo de juego favorito y juega partidas rápidas con tus amigos. Dispárales, hazlos explotar, golpéalos y gana la BRAWL.',
      image3: 'https://supercell.com/_next/static/media/bg_intro_brawlstars.31c1276f.webp',
      title2: 'Constantementte evolucionando',
      text3: 'Brawl Stars ha visto muchos desarrollos desde su lanzamiento preliminar. Volverse global es solo un nuevo comienzo.',
      image4: 'https://supercell.com/_next/static/media/bg_timeline_brawlstars.36a8fe8a.webp',
      title3: 'Estar al día',
      text4: 'Para mantenerte al tanto de tu juego, no pierdas de vista la sección de noticias del juego. Síganos en las redes sociales para conocer las últimas charlas y adelantos sobre en qué está trabajando el equipo. No seas un extraño y únete a la conversación.',
      image5: 'https://supercell.com/_next/static/media/bg_gamewebsite_brawlstars.e19bca68.webp',
      buttonTr: 'https://www.youtube.com/watch?v=CaryjOdYFa0',
      buttonSh: 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=en'
    }];

  return (
    <>
      <Header/>
      <div className="body-card">
        <div className="cont-cards container">
          <div className="row">
            {
              games.map(card => (
                <div className="col-md-6" key={card.id}>
                  <CardsGames  title={card.title} text={card.text} image={card.image} image2={card.image2} text2={card.text2}
                  image3={card.image3} title2={card.title2} text3={card.text3} image4={card.image4} title3={card.title3} text4={card.text4}  
                  image5={card.image5} buttonTr={card.buttonTr} buttonSh={card.buttonSh} />
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