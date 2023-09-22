'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import smiles from "@/public/smiles.png"
import logo from "@/public/logobox.png"
import Confetti from 'react-confetti'


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const nivelData1 =
  [
    {
      id: 0,
      valor: false,
      touched: false,
      nivel: 1
    },
    {
      id: 1,
      valor: true,
      touched: false,
      nivel: 1
    },
    {
      id: 2,
      valor: false,
      touched: false,
      nivel: 1
    }]

const nivelData2 =
  [
    {
      id: 3,
      valor: true,
      touched: false,
      nivel: 2
    },
    {
      id: 4,
      valor: false,
      touched: false,
      nivel: 2
    },
    {
      id: 5,
      valor: false,
      touched: false,
      nivel: 2
    }]
const nivelData3 =
  [
    {
      id: 6,
      valor: true,
      touched: false,
      nivel: 3
    },
    {
      id: 7,
      valor: false,
      touched: false,
      nivel: 3
    },
    {
      id: 8,
      valor: false,
      touched: false,
      nivel: 3
    }]
const nivelData4 =
  [
    {
      id: 9,
      valor: false,
      touched: false,
      nivel: 4
    },
    {
      id: 10,
      valor: false,
      touched: false,
      nivel: 4
    },
    {
      id: 11,
      valor: true,
      touched: false,
      nivel: 4
    }]
const nivelData5 =
  [
    {
      id: 12,
      valor: false,
      touched: false,
      nivel: 5
    },
    {
      id: 13,
      valor: true,
      touched: false,
      nivel: 5
    },
    {
      id: 14,
      valor: false,
      touched: false,
      nivel: 5
    }]
const nivelData6 =
  [
    {
      id: 15,
      valor: false,
      touched: false,
      nivel: 6
    },
    {
      id: 16,
      valor: false,
      touched: false,
      nivel: 6
    },
    {
      id: 17,
      valor: true,
      touched: false,
      nivel: 6
    }]
const nivelData7 =
  [
    {
      id: 18,
      valor: false,
      touched: false,
      nivel: 7
    },
    {
      id: 19,
      valor: false,
      touched: false,
      nivel: 7
    },
    {
      id: 20,
      valor: true,
      touched: false,
      nivel: 7
    }]
const nivelData8 =
  [
    {
      id: 21,
      valor: false,
      touched: false,
      nivel: 8
    },
    {
      id: 22,
      valor: false,
      touched: false,
      nivel: 8
    },
    {
      id: 23,
      valor: true,
      touched: false,
      nivel: 8
    }]
const nivelData9 =
  [
    {
      id: 24,
      valor: false,
      touched: false,
      nivel: 9
    },
    {
      id: 25,
      valor: true,
      touched: false,
      nivel: 9
    },
    {
      id: 26,
      valor: false,
      touched: false,
      nivel: 9
    }
  ]

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


export default function Home() {
  const [data, setData] = useState([])

  const [nivelUno, setNivelUno] = useState(false)
  const [nivelDos, setNivelDos] = useState(false)
  const [nivelTres, setNivelTres] = useState(false)
  const [nivelCuatro, setNivelCuatro] = useState(false)
  const [nivelCinco, setNivelCinco] = useState(false)
  const [nivelSeis, setNivelSeis] = useState(false)
  const [nivelSiete, setNivelSiete] = useState(false)
  const [nivelOcho, setNivelOcho] = useState(false)
  const [nivelNueve, setNivelNueve] = useState(false)
  const [endState, setEndState] = useState(false)
  const [lostState, setLostState] = useState(false)
  const [nivelPasado, setNivelPasado] = useState(0)
  const [sinEfecto, setSinEfecto] = useState(true)


  useEffect(() => {
    /* const obtenerNumeroAleatorio = getRandomInt(13) */
    /* if (obtenerNumeroAleatorio == 0) {
      setData(alt1)
    } else if (obtenerNumeroAleatorio == 1) {
      setData(alt2)
    } else if (obtenerNumeroAleatorio == 2) {
      setData(alt3)
    } else if (obtenerNumeroAleatorio == 3) {
      setData(alt4)
    } else if (obtenerNumeroAleatorio == 4) {
      setData(alt5)
    } else if (obtenerNumeroAleatorio == 5) {
      setData(alt6)
    } else if (obtenerNumeroAleatorio == 6) {
      setData(alt7)
    } else if (obtenerNumeroAleatorio == 7) {
      setData(alt8)
    } else if (obtenerNumeroAleatorio == 8) {
      setData(alt9)
    } else if (obtenerNumeroAleatorio == 9) {
      setData(alt10)
    } else if (obtenerNumeroAleatorio == 10) {
      setData(alt11)
    } else if (obtenerNumeroAleatorio == 11) {
      setData(alt12)
    } else {
      setData(alt13)
    } */
    shuffle(nivelData1)
    shuffle(nivelData2)
    shuffle(nivelData3)
    shuffle(nivelData4)
    shuffle(nivelData5)
    shuffle(nivelData6)
    shuffle(nivelData7)
    shuffle(nivelData8)
    shuffle(nivelData9)

    setTimeout(() => {
      mostrarCamino()
      setTimeout(() => {
        ocultarCamino()
      }, "1200");
    }, "2000");
  }, [])


  function mostrarCamino() {
    setNivelUno(true)
    setNivelDos(true)
    setNivelTres(true)
    setNivelCuatro(true)
    setNivelCinco(true)
    setNivelSeis(true)
    setNivelSiete(true)
    setNivelOcho(true)
    setNivelNueve(true)
  }

  function ocultarCamino() {
    setNivelUno(false)
    setNivelDos(false)
    setNivelTres(false)
    setNivelCuatro(false)
    setNivelCinco(false)
    setNivelSeis(false)
    setNivelSiete(false)
    setNivelOcho(false)
    setNivelNueve(false)
    setSinEfecto(false)
  }

  function filtrarNivel(nivel) {
    const listaFiltrada = data.filter((n) => nivel == n.nivel)
    return listaFiltrada
  }


  function play(nivel) {
    switch (nivel) {
      case 1: {
        setNivelUno(true)
        setNivelPasado(2)
        break
      }
      case 2: {
        setNivelDos(true)
        setNivelPasado(3)
        break
      }
      case 3: {
        setNivelTres(true)
        setNivelPasado(4)
        break
      }
      case 4: {
        setNivelCuatro(true)
        setNivelPasado(5)
        break
      }
      case 5: {
        setNivelCinco(true)
        setNivelPasado(6)
        break
      }
      case 6: {
        setNivelSeis(true)
        setNivelPasado(7)
        break
      }
      case 7: {
        setNivelSiete(true)
        setNivelPasado(8)
        break
      }
      case 8: {
        setNivelOcho(true)
        setNivelPasado(9)
        break
      }
      case 9: {
        setNivelNueve(true)
        setNivelPasado(10)
        setEndState(true)
        break
      }
    }
  }

  function perdiste() {
    setNivelUno(true)
    setNivelDos(true)
    setNivelTres(true)
    setNivelCuatro(true)
    setNivelCinco(true)
    setNivelSeis(true)
    setNivelSiete(true)
    setNivelOcho(true)
    setNivelNueve(true)
    setNivelPasado(10)
    setLostState(true)
  }

  const Button = ({ isTrue, estado, nivel }) => {
    switch (estado) {
      case "default": {
        if (isTrue) {
          return <button onClick={() => { play(nivel) }} className='shadow-2xl rounded-3xl w-40 h-40 bg-[#FF7020] animate-pulse animate-twice animate-duration-[500ms] animate-ease-in-out'></button>
        } else {
          if (nivelPasado > nivel) {
            return <button disabled className='shadow-2xl border-2 border-[#FF7020] rounded-3xl w-40 h-40 disabled:bg-orange-300 disabled:opacity-40'></button>
          } else {

            return <button onClick={() => { perdiste() }} className='shadow-2xl rounded-3xl w-40 h-40 bg-[#FF7020] focus:scale-110 transition-all duration-500 animate-pulse animate-twice animate-duration-[500ms] animate-ease-in-out'></button>
          }
        }
      }
      case "disabled": {
        return <button disabled className='shadow-2xl border-2 border-gray-400 rounded-3xl w-40 h-40 bg-[#FF7020] disabled:bg-gray-300'></button>
      }
      case "touched": {
        return <button className='shadow-2xl animate-pulse animate-twice animate-duration-[500ms] animate-ease-in-out border-2 border-[#FF7020] rounded-3xl w-40 h-40 bg-white bg-opacity-90 transition-all duration-500s flex items-center justify-center'>
          <Image
            width={130}
            height={100}
            src={logo}
          /></button>
      }
    }


  }


  return (
    <main className="flex flex-col items-center fondo-cielo">
      <h1 className='animate-fade animate-once animate-delay-500 animate-duration-[500ms] text-7xl drop-shadow-lg text-center mt-20'>La mejor ruta aérea<br /> entre Argentina y Brasil.</h1>
      <div className='animate-fade animate-delay-500 animate-duration-[1500ms] grid grid-cols-3 gap-4 p-12'>
        {endState &&
          <>
            <div className='absolute top-0 left-0 z-30'>
              <Confetti
                width={1080}
                height={1920}
                colors={['#FF7020', '#FFB814']}
                numberOfPieces={400}
              />
            </div>
            <div className='animate-fade animate-delay-500 animate-once gap-10 flex-col absolute left-0 top-0 transition-all duration-1000  min-w-full min-h-screen bg-white bg-opacity-40 text-orange-600 flex place-content-center items-center -left justify-center z-20'>
              <h1 className='text-9xl font-bold drop-shadow-lg'>FELICITACIONES</h1>
              <button className='mt-20 text-5xl transition-all duration-500 border border-orange-500 bg-orange-500 bg-opacity-50 text-white rounded-full shadow px-16 py-6 animate-pulse focus:scale-125 focus:shadow focus:shadow-orange-500' onClick={() => location.replace('/')}>Regresar</button>
            </div>

          </>
        }
        {lostState &&
          <>
            <div className='animate-fade animate-delay-500 animate-once gap-10 flex-col absolute left-0 top-0 transition-all duration-1000  min-w-full min-h-screen bg-white bg-opacity-60 text-orange-600 flex place-content-center items-center -left justify-center z-20'>
              <h1 className='text-9xl font-bold animate-jump-in animate-delay-500 animate-duration-[2500ms]'>GAME OVER</h1>
              <button className='text-5xl transition-all duration-500 border border-orange-500 bg-orange-500 bg-opacity-50 text-white rounded-full shadow px-16 py-6 animate-pulse focus:scale-125 focus:shadow focus:shadow-orange-500' onClick={() => location.replace('/')}>Regresar</button>
            </div>
          </>
        }

        {nivelData9.map((item) => {
          return (
            nivelOcho ? item.valor ? nivelNueve ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={9} estado={"default"} /> : <Button isTrue={item.valor} nivel={9} estado={"default"} /> : <Button isTrue={item.valor} nivel={9} estado={"disabled"} />
          )
        }
        )}
        {nivelData8.map((item) => {
          return (
            nivelSiete ? item.valor ? nivelOcho ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={8} estado={"default"} /> : <Button isTrue={item.valor} nivel={8} estado={"default"} /> : <Button isTrue={item.valor} nivel={8} estado={"disabled"} />
          )
        }
        )}
        {nivelData7.map((item) => {
          return (
            nivelSeis ? item.valor ? nivelSiete ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={7} estado={"default"} /> : <Button isTrue={item.valor} nivel={7} estado={"default"} /> : <Button isTrue={item.valor} nivel={7} estado={"disabled"} />
          )
        }
        )}
        {nivelData6.map((item) => {
          return (
            nivelCinco ? item.valor ? nivelSeis ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={6} estado={"default"} /> : <Button isTrue={item.valor} nivel={6} estado={"default"} /> : <Button isTrue={item.valor} nivel={6} estado={"disabled"} />
          )
        }
        )}
        {nivelData5.map((item) => {
          return (
            nivelCuatro ? item.valor ? nivelCinco ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={5} estado={"default"} /> : <Button isTrue={item.valor} nivel={5} estado={"default"} /> : <Button isTrue={item.valor} nivel={5} estado={"disabled"} />
          )
        }
        )}
        {nivelData4.map((item) => {
          return (
            nivelTres ? item.valor ? nivelCuatro ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={4} estado={"default"} /> : <Button isTrue={item.valor} nivel={4} estado={"default"} /> : <Button isTrue={item.valor} nivel={4} estado={"disabled"} />
          )
        }
        )}
        {nivelData3.map((item) => {
          return (
            nivelDos ? item.valor ? nivelTres ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={3} estado={"default"} /> : <Button isTrue={item.valor} nivel={3} estado={"default"} /> : <Button isTrue={item.valor} nivel={3} estado={"disabled"} />
          )
        }
        )}
        {nivelData2.map((item) => {
          return (
            nivelUno ? item.valor ? nivelDos ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={2} estado={"default"} /> : <Button isTrue={item.valor} nivel={2} estado={"default"} /> : <Button isTrue={item.valor} nivel={2} estado={"disabled"} />
          )
        }
        )}
        {nivelData1.map((item) => {
          return (
            item.valor ? nivelUno ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={1} estado={"default"} /> : <Button isTrue={item.valor} nivel={1} estado={"default"} />
          )
        }
        )}
      </div>
      <video muted autoPlay loop className='video'>
        <source src="./fondo.mp4" type="video/mp4" />
      </video>
    </main>
  )
}
