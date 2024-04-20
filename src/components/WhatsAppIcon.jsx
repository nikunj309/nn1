import React from 'react';
import w1 from "../assets/img1/whatsapp.png"
const WhatsAppIcon = () => {
    const phoneNumber = '1234567890'; // Replace with your phone number
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
            {/* Add your WhatsApp icon/image here */}
            <img src={w1} alt="WhatsApp Icon"  style={{width:"60px", height:"12%"}}/>
        </a>
    );
};

export default WhatsAppIcon;
