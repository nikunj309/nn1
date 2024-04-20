import React from 'react'
import TeamSection from '../components/TeamSection'

const TeamScreen = () => {
    return (
        <div className="wrapper">
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Our Team</h2>
                        </div>
                        <div className="col-12">
                            <a href="/">Home</a>
                            <a href="/team">Our Team</a>
                        </div>
                    </div>
                </div>
            </div>
            <TeamSection/>
        </div>
    )
}

export default TeamScreen