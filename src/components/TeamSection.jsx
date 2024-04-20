import React from 'react';
import omosh from "../assets/img/omosh.jpg"
import int from "../assets/img/int.jpg"
import des from "../assets/img/des.jpg"
import paint from "../assets/img/paint.jpg"

const TeamMember = ({ imageSrc, name, role }) => (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
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
            name: 'Contractor Omondi',
            role: 'CEO & Founder',
        },
        {
            imageSrc: int,
            name: 'Dylan',
            role: 'Civil Engineer',
        },
        {
            imageSrc: des,
            name: 'Mitchell',
            role: 'Interior Designer',
        },
        {
            imageSrc: paint,
            name: 'Joshua',
            role: 'Painter',
        },
    ];

    return (
        <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Team</p>
                    <h2>Meet Our Engineers</h2>
                </div>
                <div className="row">
                    {teamData.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
