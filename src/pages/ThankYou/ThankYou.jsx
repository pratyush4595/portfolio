import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './ThankYou.css';

const ThankYou = () => {

    useEffect(() => {
        document.title = 'Thank You';
    })

    return (
        <>
            <section className="thankyou-section text-center">
                <div className="container">
                    <div data-aos="zoom-in">
                        <h2 className="fw-bold mb-3">🎉 Thank You!</h2>
                        <p className="lead mb-4">Your message has been received. I’ll get back to you as soon as possible.</p>
                        <Link to="/" className="btn btn-primary">🔙 Go Back Home</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ThankYou;