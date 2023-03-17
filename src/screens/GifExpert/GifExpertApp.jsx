import {useState} from 'react';
import { AddCategory } from '../../components/AddCategory';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/footer/Footer';
import { GifGrid } from '../../components/GifGrid';
import './GifExpertApp.css'

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
    <Header />
      <div className='body-gif'>
      <h1>Gif of your games</h1>

      <AddCategory 
        // setsCategories = {setsCategories}
        onNewCategory =  { value => onAddCategory(value)}
        />

      {categories.map(( category ) =>(
          <GifGrid 
            key = {category}
            category = {category}/>
      ))}
      </div>
      <Footer/>
    </>
  )
}
