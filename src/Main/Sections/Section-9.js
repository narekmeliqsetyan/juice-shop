import './Section-9.css'

function Section9() {
    return (
        <div className='section-9'>
            <div className='section-9-row-1'>
                <div className='section-9-column-1'>
                    <div className='section-9-module-1'>
                        <div className='section-9-text-inner'>
                            <h2>Contact Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        </div>
                    </div>
                </div>
                <div className='section-9-column-2'>
                    <div className='section-9-contact-form'>
                        <div className='section-9-contact'>
                            <form className='section-9-form'>
                                <p className='contact-field-1'>
                                    <input className='contact-name-1' placeholder="Name" />
                                </p>
                                <p className='contact-field-2'>
                                    <input className='contact-name-2' placeholder="Email Address" />
                                </p>
                                <p className='contact-field-3'>
                                    <textarea className='contact-message-1' placeholder="Message"></textarea>
                                </p>
                                <div className='contact-bottom-container'>
                                    <button type='submit' className='contact-button'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-9-row-2'>
                <div className='section-9-column-3'>
                    <ul className='section-9-social-media'>
                        <li className='follow-network-1'>
                            <a href='#' className='section-9-icon'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className='follow-network-2'>
                            <a href='#' className='section-9-icon'>
                                <i className="fa-brands fa-google-plus-g"></i>
                            </a>
                        </li>
                        <li className='follow-network-3'>
                            <a href='#' className='section-9-icon'>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li className='follow-network-4'>
                            <a href='#' className='section-9-icon'>
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                        <li className='follow-network-5'>
                            <a href='#' className='section-9-icon'>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Section9;