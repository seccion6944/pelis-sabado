import { useState } from "react";
import Carta from "./components/Carta";
import Navbar from "./components/Navbar";

export default function App() {


  const peliculasIniciales = [
    {
      imagen: 'https://www.lavanguardia.com/peliculas-series/images/movie/poster/2025/4/w300/cGOBis1KNC8AkYMcOEw4lCycfD1.jpg',
      titulo: 'THUNDERBOLTS'
    },
    {
      imagen: 'https://lumiere-a.akamaihd.net/v1/images/image_68ea145b.jpeg?region=0%2C0%2C540%2C810&width=320',
      titulo: 'ELIO'
    },
    {
      titulo: 'AVATAR',
      imagen: 'https://hips.hearstapps.com/hmg-prod/images/avatar-66ca0a9027f05.jpg?crop=1xw:1xh;center,top&resize=980:*'
    }
  ]

  const [texto, setTexto] = useState('');
  const [peliculas, setPeliculas] = useState(
    peliculasIniciales
  )

  const actualizarTexto = (nuevoTexto) => {
    setTexto(nuevoTexto);
    if (nuevoTexto === '') {
      setPeliculas(peliculasIniciales);
    } else {
      const pelisFiltradas = peliculasIniciales.filter((elemento) =>
        elemento.titulo.toLowerCase().includes(nuevoTexto.toLowerCase())
      );
      setPeliculas(pelisFiltradas);
    }
  };

  const buscarPelicula = () => {
    console.log(texto)
    if (texto == '' || texto == null || !texto) {
      setPeliculas(peliculasIniciales)
    } else {
      const pelisFiltradas = peliculasIniciales.filter((elemento) => elemento.titulo.toLowerCase().includes(texto.toLowerCase()));
      setPeliculas(pelisFiltradas);
    }
  }

  

  return (
    <>
      <Navbar parametro={actualizarTexto} parametro2={buscarPelicula} />
      <section className="flex pt-10 px-10 justify-between">
        {
          peliculas.map(
            (elemento) => (
              <Carta imagen={elemento.imagen} titulo={elemento.titulo} />
            )
          )
        }
      </section>
    </>
  )
}