import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedInside from './AppliedInside';

const AppliedJobs = () => {

    const appliedData = useLoaderData()
    console.log(appliedData);

    return (
        <div>
            <h1 className='text-center m-5'> Applied Jobs</h1>
            <div className='p-5 gap-5 mx-auto '>
                {
                    appliedData.map((job => <AppliedInside
                        job={job}
                    ></AppliedInside>))
                }
            </div>

        </div>
    );
};

export default AppliedJobs;