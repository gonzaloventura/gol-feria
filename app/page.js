'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import smiles from "@/public/smiles.png"


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const alt1 =
  [
    {
      id: 0,
      valor: true,
      touched: false,
      nivel: 1
    },
    {
      id: 1,
      valor: false,
      touched: false,
      nivel: 1
    },
    {
      id: 2,
      valor: false,
      touched: false,
      nivel: 1
    },
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
    },
    {
      id: 6,
      valor: false,
      touched: false,
      nivel: 3
    },
    {
      id: 7,
      valor: true,
      touched: false,
      nivel: 3
    },
    {
      id: 8,
      valor: false,
      touched: false,
      nivel: 3
    },
    {
      id: 9,
      valor: true,
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
      valor: false,
      touched: false,
      nivel: 4
    }
  ]

const alt2 =
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
    },
    {
      id: 3,
      valor: false,
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
      valor: true,
      touched: false,
      nivel: 2
    },
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
    },
    {
      id: 9,
      valor: false,
      touched: false,
      nivel: 4
    },
    {
      id: 10,
      valor: true,
      touched: false,
      nivel: 4
    },
    {
      id: 11,
      valor: false,
      touched: false,
      nivel: 4
    }
  ]

const alt3 =
  [
    {
      id: 0,
      valor: true,
      touched: false,
      nivel: 1
    },
    {
      id: 1,
      valor: false,
      touched: false,
      nivel: 1
    },
    {
      id: 2,
      valor: false,
      touched: false,
      nivel: 1
    },
    {
      id: 3,
      valor: false,
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
      valor: true,
      touched: false,
      nivel: 2
    },
    {
      id: 6,
      valor: false,
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
      valor: true,
      touched: false,
      nivel: 3
    },
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
    }
  ]

const alt4 =
  [
    {
      id: 0,
      valor: false,
      touched: false,
      nivel: 1
    },
    {
      id: 1,
      valor: false,
      touched: false,
      nivel: 1
    },
    {
      id: 2,
      valor: true,
      touched: false,
      nivel: 1
    },
    {
      id: 3,
      valor: false,
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
      valor: true,
      touched: false,
      nivel: 2
    },
    {
      id: 6,
      valor: false,
      touched: false,
      nivel: 3
    },
    {
      id: 7,
      valor: true,
      touched: false,
      nivel: 3
    },
    {
      id: 8,
      valor: false,
      touched: false,
      nivel: 3
    },
    {
      id: 9,
      valor: true,
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
      valor: false,
      touched: false,
      nivel: 4
    }
  ]

const alt5 =
  [
    {
      id: 0,
      valor: false,
      touched: false,
      nivel: 1
    },
    {
      id: 1,
      valor: false,
      touched: false,
      nivel: 1
    },
    {
      id: 2,
      valor: true,
      touched: false,
      nivel: 1
    },
    {
      id: 3,
      valor: false,
      touched: false,
      nivel: 2
    },
    {
      id: 4,
      valor: true,
      touched: false,
      nivel: 2
    },
    {
      id: 5,
      valor: false,
      touched: false,
      nivel: 2
    },
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
    },
    {
      id: 9,
      valor: true,
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
      valor: false,
      touched: false,
      nivel: 4
    }
  ]

const alt6 =
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
    },
    {
      id: 3,
      valor: false,
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
      valor: true,
      touched: false,
      nivel: 2
    },
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
    },
    {
      id: 9,
      valor: false,
      touched: false,
      nivel: 4
    },
    {
      id: 10,
      valor: true,
      touched: false,
      nivel: 4
    },
    {
      id: 11,
      valor: false,
      touched: false,
      nivel: 4
    }
  ]

export default function Home() {
  const [data, setData] = useState([])

  const [nivelUno, setNivelUno] = useState(false)
  const [nivelDos, setNivelDos] = useState(false)
  const [nivelTres, setNivelTres] = useState(false)
  const [nivelCuatro, setNivelCuatro] = useState(false)

  useEffect(() => {
    let obtenerNumeroAleatorio = getRandomInt(6)
    if (obtenerNumeroAleatorio == 0) {
      setData(alt1)
    } else if (obtenerNumeroAleatorio == 1) {
      setData(alt2)
    } else if (obtenerNumeroAleatorio == 2) {
      setData(alt3)
    } else if (obtenerNumeroAleatorio == 3) {
      setData(alt4)
    } else if (obtenerNumeroAleatorio == 4) {
      setData(alt5)
    } else {
      setData(alt6)
    }

  }, [])

  function filtrarNivel(nivel) {
    const listaFiltrada = data.filter((n) => nivel == n.nivel)
    return listaFiltrada
  }


  function play(nivel) {
    switch (nivel) {
      case 1: {
        setNivelUno(true)
        break
      }
      case 2: {
        setNivelDos(true)
        break
      }
      case 3: {
        setNivelTres(true)
        break
      }
      case 4: {
        setNivelCuatro(true)
        break
      }
    }
  }

  const Button = ({ isTrue, estado, nivel }) => {
    switch (estado) {
      case "default": {
        if (isTrue) {
          return <button onClick={() => { play(nivel) }} className='rounded-xl w-20 h-20 bg-orange-500'></button>
        } else {
          return <button className='rounded-xl w-20 h-20 bg-orange-500 focus:scale-110 transition-all duration-500'></button>
        }
      }
      case "disabled": {
        return <button disabled className='border-2 border-gray-400 rounded-xl w-20 h-20 bg-orange-500 disabled:bg-gray-300'></button>
      }
      case "touched": {
        return <button className='border-2 border-green-600 rounded-xl w-20 h-20 bg-green-500 transition-all duration-500s animate-pulse flex items-center justify-center'>
          <Image
            width={50}
            height={40}
            src={smiles}
          /></button>
      }
    }


  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='grid grid-cols-3 gap-4'>
        {filtrarNivel(4).map((item) => {
          return (
            nivelTres ? item.valor ? nivelCuatro ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={4} estado={"default"} /> : <Button isTrue={item.valor} nivel={4} estado={"default"} /> : <Button isTrue={item.valor} nivel={4} estado={"disabled"} />
          )
        }
        )}
        {filtrarNivel(3).map((item) => {
          return (
            nivelDos ? item.valor ? nivelTres ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={3} estado={"default"} /> : <Button isTrue={item.valor} nivel={3} estado={"default"} /> : <Button isTrue={item.valor} nivel={3} estado={"disabled"} />
          )
        }
        )}
        {filtrarNivel(2).map((item) => {
          return (
            nivelUno ? item.valor ? nivelDos ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={2} estado={"default"} /> : <Button isTrue={item.valor} nivel={2} estado={"default"} /> : <Button isTrue={item.valor} nivel={2} estado={"disabled"} />
          )
        }
        )}
        {filtrarNivel(1).map((item) => {
          return (
            item.valor ? nivelUno ? <Button estado={"touched"} /> : <Button isTrue={item.valor} nivel={1} estado={"default"} /> : <Button isTrue={item.valor} nivel={1} estado={"default"} />
          )
        }
        )}
      </div>
    </main>
  )
}
