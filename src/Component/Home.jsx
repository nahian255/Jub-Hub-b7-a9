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
            <h1>i am home</h1>
        </div>
    );
};

export default Home;