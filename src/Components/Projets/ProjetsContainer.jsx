import React from 'react'

import ProjetLeft1 from './Listes/ProjetLeft1';
import ProjetRight1 from './Listes/ProjetRight1';

import { Link } from 'react-router-dom';

const ProjetsContainer = () => {
    return <>
        <div className='projets-container'>
            <ProjetLeft1 />
            <ProjetRight1 />
            <Link className='button-more' to="/projets">voir plus de projets</Link>
        </div>
    </>
}

export default ProjetsContainer