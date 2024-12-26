import React, { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import Pdf from '../../Assets/Files/CV.pdf';
import iconAccueil from '../../Assets/Images/Icons/home.svg';
import iconProjets from '../../Assets/Images/Icons/projets.svg';
import iconApropos from '../../Assets/Images/Icons/apropos.svg';
import iconMail from '../../Assets/Images/Icons/mail.svg';
import iconCv from '../../Assets/Images/Icons/cv.svg';
import iconLinkedIn from '../../Assets/Images/Icons/linkedin-icon.svg';

const Menu = () => {
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const aside = document.querySelector('aside');
            if (window.scrollY > 90) {
                aside.classList.add('show-menu');
            } else {
                aside.classList.remove('show-menu');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <>
        <aside>
            <div>
                <Link to="/" className={location.pathname === "/" ? 'menu-hover-primary active' : 'menu-hover-primary'}>
                    <p>Accueil</p>
                    <img src = {iconAccueil} alt="Accueil" />
                </Link>

                <Link to="/projets" className={location.pathname === "/projets" ? 'menu-hover-primary active' : 'menu-hover-primary'}>
                    <p>Projets</p>
                    <img src = {iconProjets} alt="Projets" />
                </Link>

                <Link to="/a-propos" className={location.pathname === "/a-propos" ? 'menu-hover-primary active' : 'menu-hover-primary'}>
                    <p>À Propos</p>
                    <img src = {iconApropos} alt="À Propos" />
                </Link>
            </div>
            <div className='menu-middle'></div>
            <div>
                <a href="mailto:colinlallauret1@gmail.com" className='menu-hover-second'>
                    <p>Mail</p>
                    <img src = {iconMail} alt="Mail" />
                </a>

                <a href={Pdf} target="_blank" className='menu-hover-second'>
                    <p>Mon CV</p>
                    <img src = {iconCv} alt="Mon CV" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/colinlallauret/" className='menu-hover-second'>
                    <p>LinkedIn</p>
                    <img src = {iconLinkedIn} alt="LinkedIn" />
                </a>
            </div>
        </aside>
    </>
}

export default Menu