// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Component/Nav';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='bg-light container'>
      <Nav></Nav>
      <Outlet />

    </div>
  )
}

export default App
