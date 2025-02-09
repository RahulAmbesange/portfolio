import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className=''>
      <Header />
      <main>
        <Outlet />
      </main>
     <Footer/>
   </div>
  );
}

export default App;
