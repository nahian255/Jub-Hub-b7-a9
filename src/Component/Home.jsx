import React from 'react';
import Header from './Header';
import CategoryList from './CategoryList';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Header />
            <CategoryList />
            <FeaturedJobs />
        </div>
    );
};

export default Home;