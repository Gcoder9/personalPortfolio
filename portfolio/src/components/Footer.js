import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@material-ui/icons/Email" ;
import '../styles/Footer.css'
function footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
         <a href='https://www.linkedin.com/in/greg-chambers-880140237/'><LinkedInIcon/></a>
         <a href='https://github.com/Gcoder9'><GitHubIcon/></a>
         <a href='https://chambersg16@yahoo.com'><EmailIcon/></a>
          
        </div>
        <p> &copy;2022 Greg Chambers</p>
    </div>
  );
}

export default footer