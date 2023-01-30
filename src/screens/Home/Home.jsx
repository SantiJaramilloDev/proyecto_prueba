import React from 'react';
import {useNavigate} from "react-router-dom";
import './home.css';

export const Home = () => {

  const history = useNavigate();

  return (
    <>
        <h1>A donde deseas dirigirte</h1>
        <button onClick={() => history('/app-gif')}>App of gif</button>
        <button onClick={() => history('/info-games')}>Info-Games</button>
    </>
  )
}
