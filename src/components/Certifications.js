import React from 'react'
import './styles/Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2>My Certifications</h2>
        <div className="certifications-container">
        <ul>
            <li>
          <div className="certifications-cards">
            <div className="certifications-card">
            <h3>Certificate of Training In Web Development</h3>
            <p>InternsElite</p>
            <p>Issued November 30, 2023</p>   
            </div>
            <div className="button">
            <a href="/Certificate1.pdf" className="btn " id='btn-c'>View Certificate</a>
            </div>
          </div>
          
          </li>
          <li>
            <div className="certifications-cards">
          <div className="certifications-card">
            <h3>Diploma In Computer Application (D.C.A)</h3>
            <p>Globle Computer Institute</p>
            <p>Issued May 11, 2023</p> 
          </div>
          <div className="button">
            <a href="/Certificate2.jpg" className="btn " id='btn-c'>View Certificate</a>
            </div>
            </div>
            </li>
           
          <li>
            <div className="certifications-cards">
          <div className="certifications-card">
            <h3>Learn HTML and CSS From Beginning To Advanced</h3>
            <p>Udemy</p>
            <p>Issued October 5, 2024</p>    
          </div>
          <div className="button">
            <a href="/Certificate3.jpg" className="btn " id='btn-c'>View Certificate</a>
            </div>
          </div>
          </li>
          <li>
            <div className="certifications-cards">
          <div className="certifications-card">
            <h3>Predictive Modeling Fundamentals I </h3>
            <p>Cognitive Class</p>
            <p>Issued October 7, 2024</p> 
          </div>
          <div className="button">
            <a href="/Certificate4.pdf" className="btn " id='btn-c'>View Certificate</a>
            </div>
          </div>
            </li>
            <li>
              <div className="certifications-cards">
            <div className="certifications-card">
                <h3>Certificate Of Participation (November Coding Contest)</h3>
                <p>GeeksforGeeks BBDEC</p>
                <p>Issued November 30, 2023</p>
            </div>
            <div className="button">
            <a href="/Certificate5.pdf" className="btn " id='btn-c'>View Certificate</a>
            </div>
            </div>
          </li>
          <li>
            <div className="certifications-cards">
            <div className="certifications-card">
                <h3>Certificate Of Participation</h3>
                <p>SMART INDIA HACKATHON 2023 <br />
                  Team | Cool as Code</p>
                <p>Issued September 27, 2023</p>
            </div>
            <div className="button">
            <a href="/Certificate6.pdf" className="btn " id='btn-c'>View Certificate</a>
            </div>
            </div>
          </li>
           <li>
              <div className="certifications-cards">
            <div className="certifications-card">
              
                <h3>Trends In Cyberscurity </h3>
                <p>Infosys | Springboard</p>
                <p>Issued September 12, 2024</p>
            </div>
            <div className="button">
            <a href="/Certificate7.pdf" className="btn " id='btn-c'>View Certificate</a>
            </div>
            </div>
          </li>
        </ul>
        </div>  
        </div>
        </section>

    )
}

export default Certifications
