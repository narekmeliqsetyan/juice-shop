import { useState } from 'react';
import './Section-3.css'

function Section3() {

    const [transform, setTransform] = useState(false)

    const fourth = () => {
        if (window.scrollY >= 2150) {
            setTransform(true)
        }
    }


    window.addEventListener('scroll', fourth)

    return (
        <div className='section-3'>
            <div className='section-3-row'>
                <div className='section-3-columns'>
                    <div className={transform ? 'section-3-module active' : 'section-3-module'}>
                        <div className='section-3-content'>
                            <div className='section-3-content-image'>
                                <span className='section-3-image-wrap'>
                                    <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/envelope.png" />
                                </span>
                            </div>
                            <div className='section-3-content-container'>
                                <h4 className='section-3-header'>
                                    <span>We Deliver</span>
                                </h4>
                                <div className='section-3-description'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-3-columns'>
                    <div className={transform ? 'section-3-module active' : 'section-3-module'} style={{ backgroundColor: '#' + 'fc6a3c', }}>
                        <div className='section-3-content'>
                            <div className='section-3-content-image'>
                                <span className='section-3-image-wrap'>
                                    <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/weather.png" />
                                </span>
                            </div>
                            <div className='section-3-content-container'>
                                <h4 className='section-3-header'>
                                    <span>Eco Friendly</span>
                                </h4>
                                <div className='section-3-description'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-3-columns' style={{ marginRight: 0 + 'px' }}>
                    <div className={transform ? 'section-3-module active' : 'section-3-module'} style={{ backgroundColor: '#' + '71b953', }}>
                        <div className='section-3-content'>
                            <div className='section-3-content-image'>
                                <span className='section-3-image-wrap'>
                                    <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/clock.png" />
                                </span>
                            </div>
                            <div className='section-3-content-container'>
                                <h4 className='section-3-header'>
                                    <span>Always Fresh</span>
                                </h4>
                                <div className='section-3-description'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3;