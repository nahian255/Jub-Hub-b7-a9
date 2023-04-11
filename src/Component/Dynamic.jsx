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
                <h1 className='text-center p-2'>{d.category}</h1>
                <h5>Job Description :</h5>
                <p>{d.jobDescription}</p>
                <h5>Job Responsibility:</h5>
                <p>{d.jobResponsibility}</p>
                <h5>Job Experiences :</h5>
                <p>{d.experiences}</p>
                <h5> Salary</h5>
                <p>{d.salary}</p>
            </div>
            <div className='p-5 bg-secondary'>
                <h2>Job Details </h2>
                <hr />

                <div className='d-flex'>
                    <h5> Job Tittle : </h5>
                    <p className='ms-2'> {d.tittle}.</p>
                </div>
                <div className='d-flex'>
                    <h5> Salary :</h5>
                    <p className='ms-2'>{d.salary}.</p>
                </div>
                <hr />
                <h2>Contrac Information -</h2>
                <div className='d-flex'>
                    <h6>Phone:</h6>
                    <p className='ms-2'>{d.phone}.</p>
                </div>
                <div className='d-flex'>
                    <h6>Email:</h6>
                    <p className='ms-2'>{d.email}.</p>
                </div>
                <div className='d-flex'>
                    <h6>Address:</h6>
                    <p className='ms-2'>{d.Address}.</p>
                </div>


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