import React from 'react'

const DetailsTemplate = () => {
    return (
        <div className="fact">
            <div className="container-fluid">
                <div className="row counters">
                    <div className="col-md-6 fact-left wow slideInLeft">
                        <div className="row">
                            <div className="col-6">
                                <div className="fact-icon">
                                    <i className="flaticon-worker"></i>
                                </div>
                                <div className="fact-text" style={{ textAlign: "center", marginTop: "20px" }}>
                                    <p data-toggle="counter-up">Unmatched</p>
                                    <p>Expertise</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fact-icon">
                                    <i className="flaticon-building"></i>
                                </div>
                                <div className="fact-text" style={{ textAlign: "center", marginTop: "20px" }}>
                                    <p data-toggle="counter-up">Countless</p>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 fact-right wow slideInRight">
                        <div className="row">
                            <div className="col-6">
                                <div className="fact-icon">
                                    <i className="flaticon-address"></i>
                                </div>
                                <div className="fact-text" style={{ textAlign: "center", marginTop: "20px" }}>
                                    <p data-toggle="counter-up">Exemplary</p>
                                    <p>Achievements</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fact-icon">
                                    <i className="flaticon-crane"></i>
                                </div>
                                <div className="fact-text" style={{ textAlign: "center", marginTop: "20px" }}>
                                    <p data-toggle="counter-up">Ongoing </p>
                                    <p>Innovations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DetailsTemplate