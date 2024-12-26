import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import Home from './Pages/Home'
import Projets from './Pages/Projets'
import Apropos from './Pages/Apropos'

function App() {
    const lenis = new Lenis()

    const scrollSpeed = 1;

    function raf(time) {
        lenis.raf(time * scrollSpeed)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const location = useLocation();

    return <>
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/projets' element={<Projets />}></Route>
                <Route path='/a-propos' element={<Apropos />}></Route>
            </Routes>
        </AnimatePresence>
    </>
}

export default App
