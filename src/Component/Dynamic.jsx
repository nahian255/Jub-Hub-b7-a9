import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb } from '../utilities/fakedb';


const Dynamic = ({ d }) => {
    // Local Storage get function...
    const handelAddToLocal = (d) => {
        addToDb(d.id)
    };

    return (
        <div className=''>
            <div className='p-5'>
                <h1>{d.category}</h1>
                <h3>Job Description :</h3>
                <p>{d.JobDescription}</p>
                <h3>Job Experiences :</h3>
                <p>{d.Experiences}</p>
                <h3> Salary:: {d.salary}</h3>
            </div>
            <div className='p-5 bg-secondary'>
                <h2>Job Details </h2>
                <hr />
                <h5> Job Tittle :   {d.tittle}    </h5>
                <h5>Salary : {d.salary}</h5>
                <hr />
                <h2>Contrac Information -</h2>
                <h6>Phone : </h6>
                <h6>Email :</h6>
                <h6>Address :</h6>

                <Link to='/appliedJobs'>
                    <button
                        onClick={handelAddToLocal(d)}
                        className='bg-info'>Apply Now</button>
                </Link>
            </div>
        </div >
    );
};

export default Dynamic;