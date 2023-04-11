import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';

function JobList({ job }) {

    return (
        <Card style={{ width: '12rem' }}>
            <div>
                <Card.Body>
                    <FontAwesomeIcon icon={faBusinessTime} />
                    <Card.Title>{job.name}</Card.Title>
                    <p>{job.number} Jobs Available</p>
                </Card.Body>
            </div>

        </Card>
    );
}

export default JobList;