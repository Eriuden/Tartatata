import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from '../utils'
// Section pour chaque type de tartes
// Filtrer donc selon le champ "typeDeTarte"
// Carrousel

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
    </div>
  )
}
