import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/Projects.css";
import DrinkFood from '../assets/DrinkFood.png'
import MovieSearch from '../assets/Movies.png'

function Projects() {
    return (
        <div className='projects'>
            <Navbar />
            <h5> My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className='portfolio-item'>
                    <div className='portfolio-item-image'>
                        <img src={DrinkFood} alt=''/>
                    </div>
                    <h3>Food and Drinks App</h3>
<a href='https://github.com/VarunTanna/ProjectOne'className='btn' >Github</a>
<a href='https://varuntanna.github.io/ProjectOne/'className='btn' >Live Site</a>

                </article>

                <article className='portfolio-item'>
                    <div className='portfolio-item-image'>
                        <img src={MovieSearch} alt=''/>
                    </div>
                    <h3>Movie Search App</h3>
<a href='https://github.com/VarunTanna/ProjectOne'className='btn' >Github</a>
<a href='https://varuntanna.github.io/ProjectOne/'className='btn' >Live Site</a>

                </article>
            </div>

           
        </div>


    )
}

export default Projects