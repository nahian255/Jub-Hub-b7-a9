import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

function TextExample({ job }) {
    // const data = useLoaderData()
    // console.log(data);
    // console.log(job);
    return (
        <Card style={{ width: '28rem' }}>
            <Card.Body>
                <img className='img-fluid' src={job.img} alt="" />
                <Card.Title>{job.tittle}</Card.Title>
                <h4>{job.type}</h4>
                <p>{job.location}</p>
                <p>{job.salary}</p>
                <Link> <button >View Deatials</button></Link>
            </Card.Body>
        </Card>
    );
}

export default TextExample;