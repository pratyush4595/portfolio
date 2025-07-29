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
        meeting_duration: '30',
        user_message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Convert date & time to Google Calendar format
    const formatToGoogleCalendarDateTime = (date, time, durationInMin = 30) => {
        const start = new Date(`${date}T${time}`);
        const end = new Date(start.getTime() + durationInMin * 60000);

        const format = (d) => {
            return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        };

        return {
            startTime: format(start),
            endTime: format(end),
        };
    };

    const generateCalendarLink = () => {
        const { meeting_date, meeting_time, meeting_duration, user_message } = formData;
        const { startTime, endTime } = formatToGoogleCalendarDateTime(meeting_date, meeting_time, meeting_duration);

        const params = new URLSearchParams({
            action: 'TEMPLATE',
            text: `Hiring Meeting with Pratyush Swain`,
            dates: `${startTime}/${endTime}`,
            details: user_message || 'Let’s connect and discuss.',
            location: 'https://meet.google.com/esi-simm-bas',
        });

        return `https://www.google.com/calendar/render?${params.toString()}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const calendarLink = generateCalendarLink();

        const templateParams = {
            ...formData,
            owner_email: 'pswain.work@gmail.com',
            meet_link: 'https://meet.google.com/esi-simm-bas',
            calendar_link: calendarLink
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
                setFormData({ user_name: '', user_email: '', meeting_date: '', meeting_time: '', meeting_duration: '30', user_message: '' });
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                alert('❌ Failed to send meeting invite.');
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