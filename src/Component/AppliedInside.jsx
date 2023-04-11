import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const AppliedInside = ({ job }) => {
    return (
        <div>
            <Card style={{ width: '48rem' }}>
                <Card.Body className='p-2 d-lg-flex justify-content-between gap-2 '>
                    <div>
                        <img className='img-fluid' src={job.img} alt="" />
                        <Card.Title>{job.tittle}</Card.Title>
                        <h4>{job.type}</h4>
                        <p>{job.location}</p>
                        <p>{job.salary}</p>

                    </div>
                    <div>
                        <Link to={`/job/${job.id}`}><button className='bg-info'>View Deatiels</button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AppliedInside;