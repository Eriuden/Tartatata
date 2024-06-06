import React from 'react'
import {useSelector} from "react-redux"
import { isEmpty } from '../utils'
/*Réfléchir à un système d'admin pour les 
fonctions de suppression et modification*/

export const TarteCard = ({tarteProps}) => {
  
  const tartes = useSelector((state) => state.allTartesReducer)

  return (
    <div key={tarteProps._id} className="flex flex-col">
        <div> {!isEmpty(tartes[0] 
        && tartes.map((tarte)=> {
            if (tarteProps._id) 
            <>
                <img src={tarte.picture}/>
                <h3>{tarte.name}</h3>
                <h3>{tarte.typeDeTarte}</h3>
                <h3>{tarte.ingrédients}</h3>
                <h3>{tarte.résumé}</h3>
                <h3>{tarte.price}</h3>
            </>
        })
        )}
        </div>
    </div>
  )
}
