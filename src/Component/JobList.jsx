import Card from 'react-bootstrap/Card';

function JobList({ job }) {
    console.log(job);
    return (
        <Card style={{ width: '12rem' }}>
            <div>
                <Card.Body>
                    <Card.Title>{job.name}</Card.Title>
                    <p>{job.number} Jobs Available</p>
                </Card.Body>
            </div>

        </Card>
    );
}

export default JobList;