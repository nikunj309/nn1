import React from 'react'

const TopBar = () => {
    return (
        <>
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="../assets/img/flomatexs.png" alt="Logo" style={{ width: '200px', height: 'auto', margin: '10px', transform: 'scale(1.4)' }} />
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
                                            <p>Mon - Sat, 8:00 - 9:00</p>
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
                                            {/* <p><a href="tel:+254723049800">+254 723 049800</a></p> */}
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
                                            <a href="mailto:Flomatexsbuildingconstractor@gmail.com" target="_blank">
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