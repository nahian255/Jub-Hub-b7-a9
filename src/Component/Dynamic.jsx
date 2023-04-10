import React from 'react';

;

const Dynamic = ({ d, id }) => {

    console.log(d);



    return (

        <div className='d-lg-flex w-lg-50'>
            <div>
                <h1>{d.category}</h1>
                <h3>Job Description :</h3>
                <p>{d.JobDescription}</p>
                <h3>Job Experiences :</h3>
                <p>{d.Experiences}</p>
                <h3> Salary:: {d.salary}</h3>
            </div>
            <div>
                <h2>Job Details </h2>
            </div>
        </div>
    );
};

export default Dynamic;