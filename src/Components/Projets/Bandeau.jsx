import React, { useEffect, useState } from 'react';
import Fleche from '../../Assets/Images/arrow.svg';

const Bandeau = () => {
    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const currentScrollY = window.pageYOffset;
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up');
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', updateScrollDirection);

        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, []);

    return (
        <div className="slider">
            <div className="slide-track">
                {Array(14).fill().map((_, index) => (
                    <div className="slide" key={index}>
                        <p>MES PROJETS</p>
                        <img
                            src={Fleche}
                            alt="arrow"
                            className={scrollDirection === 'down' ? 'arrow-down' : 'arrow-up'}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bandeau;
