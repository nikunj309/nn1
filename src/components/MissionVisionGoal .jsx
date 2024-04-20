import React from 'react';

const FeatureItem = ({ icon, title, description }) => (
    <div className="col-lg-4 col-md-12">
        <div className="feature-item">
            <div className="feature-icon">
                <i className={icon}></i>
            </div>
            <div className="feature-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
);

const FeaturesSection = ({ features }) => (
    <div className="feature wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-fluid">
            <div className="row align-items-center">
                {features.map((feature, index) => (
                    <FeatureItem key={index} {...feature} />
                ))}
            </div>
        </div>
    </div>
);

const MissionVisionGoal = () => {
    const featuresData = [
        {
            icon: 'flaticon-worker',
            title: 'Mission',
            description: "To transform spaces into functional and aesthetically pleasing environments through high-quality refurbishment services, ensuring safety, durability, and customer satisfaction.",
        },
        {
            icon: 'flaticon-building',
            title: 'Vision',
            description: "Our vision is to create inspiring and sustainable spaces that enhance the quality of life for individuals and businesses, while also contributing positively to the community and environment.",
            
        },
        {
            icon: 'flaticon-call',
            title: 'Goal',
            description: "Our goal is to be a trusted leader in the refurbishment industry, consistently delivering exceptional craftsmanship and innovative solutions that exceed our clients' expectations and inspire confidence.",
        },
    ];

    return <FeaturesSection features={featuresData} />;
};

export default MissionVisionGoal;
