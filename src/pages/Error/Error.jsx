import { Link } from 'react-router-dom';

import './Error.css';

const Error = () => {

    return (
        <>
            <Helmet>
                <title>404 Not Found | Pratyush Swain | MERN Fullstack Developer</title>
            </Helmet>

            <section className="notfound-wrapper d-flex align-items-center justify-content-center text-center">
                <div className="container" data-aos="zoom-in">
                    <div className="error-code">404</div>
                    <h2 className="error-title">Oops! Page Not Found</h2>
                    <p className="error-message">
                        The page you’re looking for doesn’t exist or was moved.
                    </p>
                    <Link to="/" className="btn btn-outline-primary rounded-pill px-4 mt-3">
                        ⬅ Back to Home
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Error;