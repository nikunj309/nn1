import React, { useState } from 'react'

const ContactScreen = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });


    const handleSubmit = async (event) => {
        event.preventDefault();

        // try {
        //   const response = await fetch('', {
        //     method: 'POST',
        //     body: new FormData(event.target), 
        //   });

        //   if (!response.ok) {
        //     throw new Error(`Network response was not ok: ${response.status}`);
        //   }

        //   console.log('Form submission successful!');
        //   setFormData({ name: '', email: '', message: '', subject: '', ...formData });
        //   alert('Thank you! Your form has been submitted successfully.');
        // } catch (error) {
        //   console.error('Form submission error:', error);
        //   alert('An error occurred. Please try again later.');
        // }
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };


    return (
        <div className="wrapper">
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="col-12">
                            <a href="/">Home</a>
                            <a href="/contact">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact wow fadeInUp">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Get In Touch</p>
                        <h2>For Any Query</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="flaticon-address"></i>
                                    <div className="contact-text">
                                        <h2>Location</h2>
                                        <p>21 Eltisley road
                                            Ilford
                                            IG1 2EP</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="flaticon-call"></i>
                                    <div className="contact-text">
                                        <h2>Phone</h2>
                                        <p>
                                            +44 7586479703</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="flaticon-send-mail"></i>
                                    <div className="contact-text">
                                        <h2>Email</h2>
                                        <p>contact@vnhconstruction
                                            ltd.co.uk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-form">
                                <div id="success"></div>
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name='name'
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            required
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            name='subject'
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                            required
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name='message'
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Message"
                                            required
                                        ></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div>
                                        <button className="btn" type="submit" id="sendMessageButton">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{margin:"10px", marginBottom:"50px", backgroundColor:"#F1F3F9", padding:"20px"}}>
                <h1 style={{ textAlign: "center", marginBottom: "30px" }}>VNH CONSTRUCTION LTD</h1>
                <p style={{ textAlign: "center" }}>VNH CONSTRUCTION LTD Company number 15461683</p>
                <p style={{ textAlign: "center" }}>21 Eltisley road Ilford IG1 2EP</p>
                <p style={{ textAlign: "center", marginTop:"20px" }}>contact@vnhconstructionltd.co.uk</p>
            </div>
            <div style={{marginTop:"30px"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.855075975983!2d0.06618267628811836!3d51.55255640740392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a65e6dc5ce57%3A0x66a40763c3315093!2s21%20Eltisley%20Rd%2C%20Ilford%20IG1%202EP%2C%20UK!5e0!3m2!1sen!2sin!4v1713957761384!5m2!1sen!2sin" style={{width:"100%", height:"400px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default ContactScreen