import React from 'react';
import Achivements from '../Achivement/Achivements';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Achivements></Achivements>

        </div>
    );
};

export default Home;