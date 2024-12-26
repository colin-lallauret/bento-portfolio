import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Pdf from '../../Assets/Files/CV.pdf';
import GitHub from '../../Assets/Images/github.svg';
import LinkedIn from '../../Assets/Images/linkedin.svg';

const Footer = () => {
  return <>
    <footer>
      <div className='footer--gap-10 footer--flex-column'>
        <div className='footer--flex-column footer--gap-10'>
          <div className='footer--flex-row footer--content'>
            <div className='footer--flex-row footer--gap-10'>
              <Link to="/"><div className='hover-link padding-text'>Accueil</div></Link>
              <Link to="/projets"><div className='hover-link padding-text'>Projets</div></Link>
              <Link to="/a-propos"><div className='hover-link padding-text'>À Propos</div></Link>
            </div>
            <a href="mailto:colinlallauret1@gmail.com" className='hover-link padding-text' >colinlallauret1@gmail.com</a>
          </div>
        </div>
        <div className='footer--flex-row footer--content'>
          <a href={Pdf} target="_blank" className='hover-link footer-download padding-text'>Télécharger mon CV</a>
          <div className='footer--flex-row footer--gap-10 footer-icons'>
            <a className='padding-text' target="_blank" href="https://github.com/colin-lallauret"><img src={GitHub} alt="GitHub" /></a>
            <a className='padding-text' target="_blank" href="https://www.linkedin.com/in/colinlallauret/"><img src={LinkedIn} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>Copyright © 2024</div>
    </footer>
  </>
}

export default Footer