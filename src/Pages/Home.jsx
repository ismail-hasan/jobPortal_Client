import React from 'react';
import HomeHero from '../CommonLayout/HomeHero';
import HomeJobs from '../CommonLayout/HomeJobs';

const Home = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <HomeHero></HomeHero>
            <HomeJobs></HomeJobs>
        </div>
    );
};

export default Home;