import React from 'react'

import template_image from '../../../Assets/Images/03d542b46b21fe7ab84937ffbff6bc85.jpg';

const ProjetRight1 = () => {
    return <>
        <div className='gradient-border pink-blue'>
            <div className='projet'>
                <div>
                    <h2>Titre 2</h2>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper sapien vel justo aliquet posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin quis enim lacinia, vulputate risus eu, efficitur est. Etiam est justo, rhoncus at est vel, iaculis viverra sapien. </p>
                    <div className='tags'>
                        <p>TAG</p>
                        <p>TAG</p>
                        <p>TAG</p>
                    </div>
                </div>
                <img src = {template_image} alt="img" />
            </div>
        </div>
    </>
}

export default ProjetRight1