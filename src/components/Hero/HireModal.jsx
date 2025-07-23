import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './HireModal.css';

const HireModal = ({ show, onClose }) => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_org: '',
        meeting_date: '',
        meeting_time: '',
        user_message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            ...formData,
            owner_email: 'pswain.work@gmail.com',
            meet_link: 'https://meet.google.com/esi-simm-bas'
        };

        emailjs.send(
            'service_fs2nv9l',
            'template_65gfuje',
            templateParams,
            'gNfrEKJef1YPKCc_H'
        )
            .then(() => {
                alert('📩 Meeting invite sent via email!');
                onClose();
            })
            .catch((error) => {
                alert('❌ Failed to send meeting invite.');
                console.error(error);
            });
    };

    if (!show) return null;

    return (
        <div className="hire-modal">
            <div className="hire-modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h4 className="mb-3">📆 Schedule a Meeting</h4>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="user_name" placeholder="Full Name" required onChange={handleChange} />
                    <input type="email" name="user_email" placeholder="Email Address" required onChange={handleChange} />
                    <input type="text" name="user_org" placeholder="Organization" onChange={handleChange} />
                    <input type="date" name="meeting_date" required onChange={handleChange} />
                    <input type="time" name="meeting_time" required onChange={handleChange} />
                    <textarea name="user_message" placeholder="Message" rows="3" onChange={handleChange}></textarea>
                    <button type="submit" className="btn btn-success mt-3">Send Meeting Request</button>
                </form>
            </div>
        </div>
    );
};

export default HireModal;