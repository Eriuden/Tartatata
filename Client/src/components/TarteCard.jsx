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
                <img src={tarteProps.picture}/>
                <h3>{tarteProps.name}</h3>
                <h3>{tarteProps.typeDeTarte}</h3>
                <h3>{tarteProps.ingrédients}</h3>
                <h3>{tarteProps.résumé}</h3>
                <h3>{tarteProps.price}</h3>
            </>
        })
        )}
        </div>
    </div>
  )
}
