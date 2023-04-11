import React, { useEffect, useState } from 'react';
import FeatureItem from './FeatureItem';

const FeaturedJobs = () => {
    const [jobss, setJobss] = useState([]);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobss(data))
    }, [])

    return (
        <div className='row'>
            <div className='text-center'>
                <h1>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='row row-cols-2 gap-5 mx-auto'>
                {
                    jobss.map((job => <FeatureItem
                        key={job.id}
                        job={job}
                    ></FeatureItem>))
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;