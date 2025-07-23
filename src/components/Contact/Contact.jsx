import React, { useEffect } from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';

const Contact = () => {

    useEffect(() => {
        document.title = 'Contact | Pratyush Swain | MERN Fullstack Developer';
    }, [])

    return (
        <>
            <section className="contact-section mt-5" id="contact">
                <div className="container">
                    <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Get in Touch</h2>

                    <div className="row justify-content-center">
                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                            <form
                                action="https://formsubmit.co/pswain.work@gmail.com"
                                method="POST"
                                className="contact-form p-4 shadow rounded"
                            >
                                {/* Hidden settings for formsubmit */}
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_autoresponse" value="Thanks for contacting me. I’ll get back to you soon!" />
                                <input type="hidden" name="_next" value="https://devpratyush.netlify.app/thankyou" />

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" name="email" className="form-control" id="email" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input type="text" name="subject" className="form-control" id="subject" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea name="message" className="form-control" id="message" rows="5" required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">📩 Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;