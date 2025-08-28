import React from 'react'
import './styles/Education.css';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>My Education</h2>
        <div className="education-container">
        <ul>
            <li>
          <div className="education-card">
            <h3>Bachelor of Technology in Computer Science & Engineering</h3>
            <p>BABU BANARASI DAS ENGINEERING COLLEGE LUCKNOW </p>
            <p>2022- 2026</p>    
          </div>
          </li>
          <li>
          <div className="education-card">
            <h3>Intermediate</h3>
            <p>EXON MONTESSORI INTER COLLEGE LUCKNOW</p>
            <p>2020-2021</p> 
            <p>PERCENTAGE : 75.2%</p>
          </div>
            </li>
            <li>
            <div className="education-card">
                <h3>High School</h3>
                <p>EXON MONTESSORI INTER COLLEGE LUCKNOW</p>
                <p>2018-2019</p>
                <p>PERCENTAGE : 75.66%</p>
            </div>
          </li>
        </ul>
        </div>  
        </div>
        </section>
  )
}
