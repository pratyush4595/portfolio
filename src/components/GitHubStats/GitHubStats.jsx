import React from 'react';
import './GitHubStats.css';

const GitHubStats = () => {
    return (
        <section className="github-stats py-5" id="github">
            <div className="container text-center">
                <h2 className="fw-bold mb-5">GitHub Stats</h2>

                <div className="row g-4 justify-content-center">
                    {/* GitHub Main Stats */}
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="stat-card p-3">
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=pratyush4595&show_icons=true&hide_border=true&bg_color=00000000&theme=default"
                                alt="GitHub Stats"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    {/* GitHub Streak */}
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="stat-card p-3">
                            <img
                                src="https://github-readme-streak-stats.herokuapp.com?user=pratyush4595&hide_border=true&background=00000000&theme=default"
                                alt="GitHub Streak"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    {/* Top Languages */}
                    <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="stat-card p-3">
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=pratyush4595&layout=compact&hide_border=true&bg_color=00000000&theme=default"
                                alt="Top Languages"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GitHubStats;