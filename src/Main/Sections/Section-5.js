import { useState } from 'react';
import './Section-5.css'

function Section5() {

    const [animation, setAnimation] = useState(false)

    const fifth = () => {
        if (window.scrollY >= 3860) {
            setAnimation(true)
        }
    }

    window.addEventListener('scroll', fifth)

    return (
        <div className='section-5'>
            <div className='section-5-row-1'>
                <div className='section-5-column-1'>
                    <div className='section-5-image-module'>
                        <span className='image-wrap'>
                            <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/juice-bar-10.jpg" />
                        </span>
                    </div>
                </div>
                <div className='section-5-column-2'>
                    <div className='section-5-module-1'>
                        <div className='promo-description' >
                            <h2>Our Cleanses</h2>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className='button-wrapper'>
                            <a className='section-5-promo-button'>Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-5-row-2'>
                <div className='section-5-column-3'>
                    <div className={animation ? 'section-5-module-2 active' : 'section-5-module-2'}>
                        <span className='image-wrap-2'>
                            <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/juice-bar-32-2.png" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section5;