import React, {useState} from 'react'
import {Squash as Hamburger} from "hamburger-react"

// La nav : les types de tartes avec un link pour y amener
// A vérifier plus tard, la communication entre components et pages en React

export const Header = () => {
  
  const [hamburger, setHamburger] = useState(false)

  return (
    <div>
      <div>
        <h1>Tartatata</h1>
        <p>Une bonne tarte dans la bouche</p>
      </div>

      <nav className='hidden flex-row justify-around mt-0 sm:flex'>
          <a href='#Pizzas'>Pizzas</a>
          <a href='#Quiches'>Quiches</a>
          <a href='#Tielles'>Tielles</a>
          <a href='#Flammekueches'>Flammekueches</a>
          <a href='#Dessert'>Dessert</a>     
      </nav>

      <h2 className='flex m-3 sm:hidden' onClick={()=> setHamburger(!hamburger)}>
        <Hamburger/>
      </h2>

      { hamburger ? (
        <nav className='flex flex-col items-start justify-start
        border-spacing-1 ml-3.5 absolute border-2 border-black
        opacity-100 sm:hidden'>
          <a href='#Pizzas'>Pizzas</a>
          <a href='#Quiches'>Quiches</a>
          <a href='#Tielles'>Tielles</a>
          <a href='#Flammekueches'>Flammekueches</a>
          <a href='#Dessert'>Dessert</a>
        </nav>
      ) :""}
    </div>
  )
}
