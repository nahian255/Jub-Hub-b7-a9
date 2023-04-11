
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function ContainerInsideExample() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary text-decoration-none">
                <div class="container-fluid d-flex justify-content-between bg-Secondary w-100">
                    <div>
                        <NavLink to='/' className='fs-2 text-decoration-none'>Job Hub</NavLink>
                    </div>
                    <div className=''>
                        <Link className='text-decoration-none' to='/'>Home</Link>
                        <Link className='p-2 text-decoration-none' to='/statistics'>Statistics</Link>
                        <Link className='text-decoration-none' to='/appliedJobs'>Applied Jobs</Link>
                        <Link className='p-2 text-decoration-none' to='/blog'>Blog</Link>
                    </div>
                    <div>
                        <Link to='/appliedJobs' >
                            <Button variant="info">Applied Jobs</Button>{' '}</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default ContainerInsideExample;