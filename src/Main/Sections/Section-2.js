import { useState } from 'react';
import './Section-2.css'

function Section2() {
    const [translate, setTranslate] = useState(false)

    const scroll = () => {
        if (window.scrollY >= 1330 && window.scrollY <= 1800) {
            setTranslate(true)
        }

        if (window.scrollY >= 1000) {
            let parallerbg = window.scrollY - 500
        }
    }

    window.addEventListener('scroll', scroll)

    return (
        <div className='section-2'>
            <span className='section-2-paraller-bg-wrap'>
                <span className='section-2-paraller-bg' style={{ transform: + 'translate' + (0 + ',' + 1) }}></span>
            </span>
            <div className={translate ? 'section-2-row active' : 'section-2-row'}>
                <div className='section-2-column'>
                    <div className='section-2-module'>
                        <div className='section-2-promo-description'>
                            <h2>The Best In Juice</h2>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className='promo-button-wrapper'>
                            <a href='#' className='promo-button'>Visit Us!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;