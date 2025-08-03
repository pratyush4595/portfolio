import React, { useEffect, useRef, useState } from 'react';
import './Highlights.css';

const highlightsData = [
    { icon: 'bi-code-slash', title: 'Projects', value: '3 Completed' },
    { icon: 'bi-mortarboard-fill', title: 'Education', value: 'MCA, Manipal University' },
    { icon: 'bi-award-fill', title: 'Certification', value: 'Frontend - Relevel' },
    { icon: 'bi-lightbulb-fill', title: 'Skills', value: '15+ Technologies' },
    { icon: 'bi-github', title: 'GitHub', value: '100+ Commits' },
    { icon: 'bi-clock-history', title: 'Learning', value: 'Always Upgrading' },
];

const Highlights = () => {
    const containerRef = useRef(null);
    const intervalRef = useRef(null);
    const [showControls, setShowControls] = useState(false);

    const scrollNext = () => {
        containerRef.current.scrollBy({
            left: containerRef.current.clientWidth / 2,
            behavior: 'smooth'
        });
    };

    const scrollPrev = () => {
        containerRef.current.scrollBy({
            left: -containerRef.current.clientWidth / 2,
            behavior: 'smooth'
        });
    };

    const startAutoScroll = () => {
        intervalRef.current = setInterval(() => {
            const container = containerRef.current;
            if (container) {
                container.scrollBy({ left: container.clientWidth / 3, behavior: 'smooth' });
                if (Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth - 5) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 3000);
    };

    const stopAutoScroll = () => clearInterval(intervalRef.current);

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, []);

    return (
        <section className="highlights py-5">
            <div className="container">
                <h2 className="text-center fw-bold mb-4">Highlights</h2>

                <div
                    className="highlight-scroll-container"
                    onMouseEnter={() => {
                        setShowControls(true);
                        stopAutoScroll();
                    }}
                    onMouseLeave={() => {
                        setShowControls(false);
                        startAutoScroll();
                    }}
                >
                    {/* Arrows */}
                    {showControls && (
                        <>
                            <button className="highlight-arrow prev" onClick={scrollPrev}>
                                ‹
                            </button>
                            <button className="highlight-arrow next" onClick={scrollNext}>
                                ›
                            </button>
                        </>
                    )}

                    <div className="scroll-wrapper" ref={containerRef}>
                        {highlightsData.map((item, idx) => (
                            <div
                                className="highlight-card text-center shadow-sm p-4 rounded-4 bg-body-tertiary"
                                key={idx}
                                data-aos="zoom-in"
                                data-aos-delay={`${idx * 100}`}
                            >
                                <div className="icon mb-3 text-primary fs-2">
                                    <i className={`bi ${item.icon}`}></i>
                                </div>
                                <h5 className="mb-1 fw-bold">{item.title}</h5>
                                <p className="mb-0 text-muted">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;