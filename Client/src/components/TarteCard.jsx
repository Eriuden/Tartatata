import React from 'react'
import { isEmpty } from '../utils'
/*Réfléchir à un système d'admin pour les 
fonctions de suppression et modification*/

export const TarteCard = ({tarteProps}) => {
  

  return (
    <div key={tarteProps._id} className="flex flex-col">
        <div> { tarteProps._id ? (
          <>
            <img src={tarteProps.picture}/>
            <h3>{tarteProps.name}</h3>
            <h3>{tarteProps.typeDeTarte}</h3>
            <h3>{tarteProps.ingrédients}</h3>
            <h3>{tarteProps.résumé}</h3>
            <h3>{tarteProps.price}</h3>
          </> 
        ) : ""                             
        }
        </div>
    </div>
  )
}
