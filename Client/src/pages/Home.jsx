import React from 'react'
import { useSelector } from 'react-redux'
import { TarteCard } from '../components/TarteCard'
import { isEmpty } from '../utils'
//Type de tartes, pour l'instant, quiches, pizzas, tielles

export const Home = () => {

  const tartes = useSelector((state)=> state.allTartesReducer)
  const [carrouselImage, setcarrouselImage] = useState(tartes[0])

  const carrouselPlus = () => {
    if (carrouselImage > tartes.length) {
      setcarrouselImage(tartes[0])
    }
    setcarrouselImage(carrouselImage + 1)
  }

  const carrouselMoins = () => {
    if (carrouselImage < 0) {
      setcarrouselImage(tartes.length -1)
    }
    setcarrouselImage(carrouselImage - 1)
  }

  const quiches = tartes.filter(tarte => tarte.typeDeTarte === "Quiches")
  const pizzas = tartes.filter(tarte => tarte.typeDeTarte === "Pizzas")
  const tielles = tartes.filter(tarte => tarte.typeDeTarte === "Tielles")

  return (
    <div>
      <div>{isEmpty((tartes[0])) &&
      tartes.map((tarte)=> {
        <>
          <button onClick={carrouselMoins()}>precédent</button>
          <img src={carrouselImage}/>
          <p>{tarte.name}</p>
          <button onClick={carrouselPlus()}>suivant</button>
        </>    
      })}
    </div>

      <section className='flex flex-row'>
        {quiches.map((tarte) => {
          <>
            <TarteCard tarteProps={tarte} key={tarte._id}/>
          </>
        })}
      </section>

      <section className='flex flex-row'>
        {pizzas.map((tarte) => {
          <>
            <TarteCard tarteProps={tarte} key={tarte._id}/>
          </>
        })}
      </section>

      <section className='flex flex-row'>
        {tielles.map((tarte) => {
          <>
            <TarteCard tarteProps={tarte} key={tarte._id}/>
          </>
        })}
      </section>

    </div>
  )
}
