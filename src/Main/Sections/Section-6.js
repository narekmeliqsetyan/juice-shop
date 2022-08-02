import { useState } from 'react';
import './Section-6.css'

function Section6() {

    const [sixth, setSixth] = useState(false)

    const [width, setWidth] = useState(false)

    const [val, setval] = useState(false)

    const anim = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 4750) {
            setSixth(true)
        }

        if (window.scrollY >= 5300) {
            setWidth(true)
        }

        if (window.scrollY >= 5400) {
            setval(true)
        }
    }

    window.addEventListener('scroll', anim)

    return (
        <div className='section-6'>
            <div className='section-6-row-1'>
                <div className='section-6-column-1'>
                    <div className='section-6-module-1'>
                        <div className='text-inner'>
                            <h2>Hygenic & Healthy Juices</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-6-row-2'>
                <div className='section-6-row-2-columns'>
                    <div className={sixth ? 'section-6-row-2-module active' : 'section-6-row-2-module'}>
                        <div className='section-6-row-2-content'>
                            <div className='section-6-row-2-image'>
                                <span className='image-wrap'>
                                    <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/1.png" />
                                </span>
                            </div>
                            <div className='section-6-row-2-container'>
                                <h4 className='section-6-row-2-header'>
                                    <span>Orange Juice</span>
                                </h4>
                                <div className='section-6-row-2-description'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-6-row-2-columns'>
                    <div className={sixth ? 'section-6-row-2-module active' : 'section-6-row-2-module'} style={{ backgroundColor: '#' + 'fc6a3c', }}>
                        <div className='section-6-row-2-content'>
                            <div className='section-6-row-2-image'>
                                <span className='image-wrap'>
                                    <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/2.png" />
                                </span>
                            </div>
                            <div className='section-6-row-2-container'>
                                <h4 className='section-6-row-2-header'>
                                    <span>Tomato Juice</span>
                                </h4>
                                <div className='section-6-row-2-description'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-6-row-2-columns' style={{ marginRight: 0, marginBottom: 0 }}>
                    <div className={sixth ? 'section-6-row-2-module active' : 'section-6-row-2-module'} style={{ backgroundColor: '#' + '71b953', }}>
                        <div className='section-6-row-2-content'>
                            <div className='section-6-row-2-image'>
                                <span className='image-wrap'>
                                    <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/5.png" />
                                </span>
                            </div>
                            <div className='section-6-row-2-container'>
                                <h4 className='section-6-row-2-header'>
                                    <span>Green Boost</span>
                                </h4>
                                <div className='section-6-row-2-description'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-6-row-3'>
                <div className='section-6-row-3-columns'>
                    <ul className='section-6-row-3-modules'>
                        <li className='section-6-row-3-counters'>
                            <span className='row-3-title'>VItamin D</span>
                            <span className='row-3-containers'>
                                <span className={width ? 'row-3-counter-1 active' : 'row-3-counter-1'}></span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='section-6-row-3-columns'>
                    <ul className='section-6-row-3-modules'>
                        <li className='section-6-row-3-counters'>
                            <span className='row-3-title' style={{ color: '#' + '017a8d', }}>Potassium</span>
                            <span className='row-3-containers'>
                                <span className={width ? 'row-3-counter-2 active' : 'row-3-counter-2'}></span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='section-6-row-3-columns' style={{ marginRight: 0, marginBottom: 0 }}>
                    <ul className='section-6-row-3-modules'>
                        <li className='section-6-row-3-counters'>
                            <span className='row-3-title' style={{ color: '#' + 'ac3b4a', }}>VItamin B12</span>
                            <span className='row-3-containers'>
                                <span className={width ? 'row-3-counter-3 active' : 'row-3-counter-3'}></span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='section-6-row-4'>
                <div className='section-6-row-4-columns'>
                    <ul className='section-6-row-4-modules'>
                        <li className='section-6-row-4-counters'>
                            <span className='row-4-title' style={{ color: '#' + 'f1be52' }}>VItamin A</span>
                            <span className='row-4-containers'>
                                <span className={val ? 'row-4-counter-1 active' : 'row-4-counter-1'}></span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='section-6-row-4-columns'>
                    <ul className='section-6-row-4-modules'>
                        <li className='section-6-row-4-counters'>
                            <span className='row-4-title' style={{ color: '#' + 'fc6a3c' }}>VItamin B</span>
                            <span className='row-4-containers'>
                                <span className={val ? 'row-4-counter-2 active' : 'row-4-counter-2'}></span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='section-6-row-4-columns' style={{ marginRight: 0, marginBottom: 0 }}>
                    <ul className='section-6-row-4-modules'>
                        <li className='section-6-row-4-counters'>
                            <span className='row-4-title' style={{ color: '#' + '71b953' }}>VItamin C</span>
                            <span className='row-4-containers'>
                                <span className={val ? 'row-4-counter-3 active' : 'row-4-counter-3'}></span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Section6;