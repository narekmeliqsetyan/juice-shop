import { useState } from 'react';
import './Section-1.css'

function Section1() {

    const [key, setKey] = useState(false)

    const animations = () => {
        if(window.scrollY >= 360){
            setKey(true)
        }
    }

    window.addEventListener('scroll', animations)


    return (
        <div className='Section-1'>
            <div className='Section-1-row'>
                <div className='Section-1-column-1'>
                    <div className='Section-1-column-1-module'>
                        <div className='Section-1-column-1-module-content'>
                            <div className='Section-1-column-1-image'>
                                <span>
                                    <img className={key ? 'column-1-image active' : 'column-1-image'}
                                        src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/juice-bar-72.jpg"
                                    />
                                </span>
                            </div>
                            <div className='Section-1-column-1-container'>
                                <h4>
                                    <span>Vegetable Juices</span>
                                </h4>
                                <div className='Section-1-column-1-description'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Section-1-column-2'>
                    <div className='Section-1-column-2-module'>
                        <div className='Section-1-column-2-module-content'>
                            <div className='Section-1-column-2-image'>
                                <span>
                                    <img className={key ? 'column-2-image active' : 'column-2-image'}
                                        src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/juice-bar-57.jpg"
                                    />
                                </span>
                            </div>
                            <div className='Section-1-column-2-container'>
                                <h4>
                                    <span>Fruit Juices</span>
                                </h4>
                                <div className='Section-1-column-2-description'>
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

export default Section1;