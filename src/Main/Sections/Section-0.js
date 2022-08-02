import { useState } from 'react';
import './Section-0.css'

function Section0() {
    const [animation, setAnimation] = useState(false)

    const scroll = () => {
        if (window.scrollY >= 0 && window.scrollY <= 350) {
            setAnimation(true)
        }
    }

    window.addEventListener('scroll', scroll)

    return (
        <div className='section-0'>
            <div className={animation ? 'section-0-module' : 'section-0-module active '}>
                <div className='section-0-module-header-container'>
                    <div className='header-content-container'>
                        <div className='header-content'>
                            <h1>Okape</h1>
                            <span>Juice Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section0; 