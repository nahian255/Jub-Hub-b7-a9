import React from 'react';
import Header from './Header';
import CategoryList from './CategoryList';
import FeaturedJobs from './FeaturedJobs';
import Dynamic from './Dynamic';

const Home = () => {
    return (
        <div>
            <Header />
            <CategoryList />
            <FeaturedJobs />
            {/* <Dynamic /> */}
        </div>
    );
};

export default Home;