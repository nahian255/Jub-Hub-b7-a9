import React, { useEffect, useState } from 'react';
import JobList from './JobList';

const CategoryList = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className='py-5'>
            <div className='text-center mb-5'>
                <h1>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>
            <div className='d-lg-flex  justify-content-around'>
                {
                    jobs.map((job => <JobList
                        job={job}
                    ></JobList>))
                }

            </div>

        </div>
    );
};

export default CategoryList;