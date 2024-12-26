import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import transition from "../transition"

import Header from '../Components/Regions/Header'
import Footer from '../Components/Regions/Footer'
import Menu from '../Components/Regions/Menu'
import Scroll from '../Components/Scroll';
import ProjetsLeft1 from '../Components/Projets/Listes/ProjetLeft1';
import ProjetRight1 from '../Components/Projets/Listes/ProjetRight1';
import ProjetsLeft2 from '../Components/Projets/Listes/ProjetLeft2';
import ProjetRight2 from '../Components/Projets/Listes/ProjetRight2';
import ProjetsLeft3 from '../Components/Projets/Listes/ProjetLeft3';
import ProjetRight3 from '../Components/Projets/Listes/ProjetRight3';

import FavIcon from '../Assets/Favicon/favicon.ico';
import FavIconOutline from '../Assets/Favicon/outlinefavicon.ico';

function Projets() {
    useEffect(() => {
        document.title = 'Projets — Colin LALLAURET';

        const handleVisibilityChange = () => {
            const favicon = document.querySelector("link[rel='icon']");
            if (document.visibilityState === 'hidden') {
                document.title = 'Où allez-vous ? 💻✨';
                favicon.href = FavIconOutline;
            } else {
                document.title = 'Projets — Colin LALLAURET';
                favicon.href = FavIcon;
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return <>
        <Header />
        <Menu />
        <main className='home'>
            <div className='fullPage'>
                <h1>Mes projets</h1>
                <Scroll />
            </div>
            <div className='projets-container'>
                <ProjetsLeft1 />
                <ProjetRight1 />
                <ProjetsLeft2 />
                <ProjetRight2 />
                <ProjetsLeft3 />
                <ProjetRight3 />
            </div>
        </main>
        <Footer />
    </>
}

export default transition(Projets)
