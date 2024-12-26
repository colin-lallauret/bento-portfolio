import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Logo from '../../Assets/Images/Logo/logo-white.svg';

const Header = () => {
  return <>
    <header>
        <Link to="/">
            <div>
                <img src = {Logo} alt="Logo" ></img>
                <p>Colin LALLAURET</p>
            </div>
        </Link>
        <div>
            <Link to="/"><div className='hover-link-2 padding-text'>Accueil</div></Link>
            <Link to="/projets"><div className='hover-link-2 padding-text'>Projets</div></Link>
            <Link to="/a-propos"><div className='hover-link-2 padding-text'>À Propos</div></Link>
        </div>
    </header>
  </>
}

export default Header