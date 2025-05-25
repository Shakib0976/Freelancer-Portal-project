import React from 'react';
import Carusel from './Carusel';
import CardAnnimation from './CardAnnimation';
import Card2 from './Card2';
import LimitDeadlines from '../Components/limitDedlindes';



const Home = () => {
    return (
       <div>
        <Carusel></Carusel>
        <LimitDeadlines></LimitDeadlines>
        <CardAnnimation></CardAnnimation>
        <Card2></Card2>
       </div>
    );
};

export default Home;