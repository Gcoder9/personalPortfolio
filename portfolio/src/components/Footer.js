import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@material-ui/icons/Email" ;
import '../styles/Footer.css'
function footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
           < LinkedInIcon/>
           < GitHubIcon />
           < EmailIcon />
        </div>
        <p> &copy;2022 Greg Chambers</p>
    </div>
  );
}

export default footer