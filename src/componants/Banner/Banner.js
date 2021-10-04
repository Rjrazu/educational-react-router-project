import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/about`);
    }

    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <h1 className="title">
                            Commitment School <br /> And College!
                        </h1>
                        <p className="text-white mt-3">
                            Education is the passport to the future, <br /> for tomorrow belongs to those who prepare for it today.
                        </p>
                        <button onClick={handleClick} className="mt-3 contact-btn">About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;