import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@material-ui/icons/Email" ;
import "../styles/Home.css"

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2> Hi, My name is Greg Chambers</h2>
                <div className='prompt'>
                    <p>
                        A software developer witha passion for learning and creating.
                    </p>
                    < LinkedInIcon />
                    < GitHubIcon />
                    < EmailIcon />
               </div>
            </div>
                <div className='skills'>
                    <h1> Skills </h1>
                    <ol className='list'>
                        <li className='item'>
                            <h2> Front-End</h2>
                            <span>ReactJS, HTML, CSS, Bootstrap, NPM, StyledComponents</span>
                        </li>
                        <li className='item'>
                            <h2> Back-End</h2>
                            <span>NodeJS, Express, ApolloServer, GraphQL, MySQL, MongoDB,</span>
                        </li>
                        <li className='item'>
                            <h2> Languages</h2>
                            <span>Javacript, Java, C# </span>
                        </li>
                    </ol>
                </div>
        </div>
    )
}

export default Home