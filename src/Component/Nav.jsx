// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function ContainerInsideExample() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid d-flex justify-content-between bg-Secondary w-100">
                    <div>
                        <NavLink to='/' className='fs-2'>Job Hub</NavLink>
                    </div>
                    <div className=''>
                        <Link to='/'>Home</Link>
                        <Link className='p-2' to='/statistics'>Statistics</Link>
                        <Link to='/appliedJobs'>Applied Jobs</Link>
                        <Link className='p-2' to='/blog'>Blog</Link>
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