

import React from 'react';
import omosh from "../assets/img/rev4.jpg";
import rev1 from "../assets/img/rev1.jpg";

const TeamMember = ({ imageSrc, name, role }) => (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{justifyContent:"center", alignItems:'center'}}>
        <div className="team-item">
            <div className="team-img">
                <img src={imageSrc} alt="Team Image" />
            </div>
            <div className="team-text">
                <h2>{name}</h2>
                <p>{role}</p>
            </div>
            <div className="team-social">
                <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
);

const TeamSection = () => {
    const teamData = [
        {
            imageSrc: omosh,
            name: 'VIPULKUMAR BHARUCHA',
            role: 'CEO & Founder',
        },
        {
            imageSrc: rev1,
            name: 'VIPULKUMAR BHARUCHA',
            role: 'Director',
        },
    ];

    return (
        <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Team</p>
                    <h2>Meet Our Founder</h2>
                </div>
                <div className="row d-flex justify-content-center">
                    {teamData.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
