import React from 'react'
import logo from '../../public/OBJECTS_black.png'
const TopBar = () => {
    return (
        <>
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="logo">
                                <a href="/">
                                    <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto', transform: 'scale(1.4)'}} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 d-none d-lg-block">
                            <div className="row">
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-calendar"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Opening Hour</h3>
                                            <p>Mon - Sat, 9:00 - 6:00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-call"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Call Us</h3>
                                            <p><a href="tel: +44 7586479703"> +44 7586479703</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-send-mail"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Email Us</h3>
                                            <a href="mailto:contact@vnhconstructionltd.co.uk" target="_blank">
                                                <i className="fas fa-envelope"></i> Click Here
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar