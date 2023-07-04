import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const SearchGiphyApp = () => {

const [categories, setCategories] = useState( [ 'Dragon Ball'] );

const onAddCategory = ( newCategory ) => {
  // console.log(newCategory);
  // categories.push(newCategory)  ;

if( categories.includes(newCategory)) return;

  setCategories([ newCategory, ...categories ])
}

  return (
    <>
    {/* Título */}
      <h1>Search Giphy</h1>

      {/* Input */}
      <AddCategory 
      // setCategories= { setCategories }
      onNewCategory = { (value) => onAddCategory(value)}
      />

      {/* Listado de GIFs */}
        { 
        categories.map( ( category ) => (
            <GifGrid 
            key={ category } 
            category={ category }/>
          )) 
        }

      {/* GIF Item */}


    </>
  )
}
