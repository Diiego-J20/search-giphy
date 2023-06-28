import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const SearchGiphyApp = () => {

const [categories, setCategories] = useState( ['Super Smash Bros Ultimate', 'Pokemon'] );

const onAddCategory = () => {
    setCategories( [ 'Dragon Ball', ...categories ] )
}

  return (
    <>
    {/* Título */}
      <h1>Searh Giphy</h1>

      {/* Input */}
      <AddCategory/>

      {/* Listado de GIFs */}
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
        { categories.map(category => {
          return <li key={ category }>{category}</li>
        }) }
  

      </ol>

      {/* GIF Item */}


    </>
  )
}
