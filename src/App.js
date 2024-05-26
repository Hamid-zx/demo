import './App.css';
import Courses from './Components/Courses';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Paidcourses from './Components/Paidcourses';
import Section from './Components/Section';
import Services from './Components/Services';

function App() {
  return (
    <>
    <Navbar/>
    <Section/>
    <Services/>
    <Courses/>
    <Paidcourses/>
    <Footer/>
    </>
  );
}

export default App;
