import {useState} from 'react';
import { AddCategory } from '../../components/AddCategory';
import { GifGrid } from '../../components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setsCategories] = useState([ 'gta v']);
  
  const onAddCategory = (newCategory) => {
    if ( categories.includes (newCategory)) return;
    // console.log(newCategory);
    setsCategories([ newCategory,...categories])
    // setsCategories(cat => [...cat, 'Naruto'])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        // setsCategories = {setsCategories}
        onNewCategory =  { value => onAddCategory(value)}
        />

      {categories.map(( category ) =>(
          <GifGrid 
            key = {category}
            category = {category}/>
      ))}
    </>
  )
}
