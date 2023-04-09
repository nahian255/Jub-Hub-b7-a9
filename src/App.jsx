// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Component/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function App() {

  return (
    <div className='bg-light container'>
      <Nav></Nav>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
