import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          
          <Hero />
          <Education />
          <Projects />
          <Skills />       
          <Certifications/> 
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;