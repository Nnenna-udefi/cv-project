import React from 'react'
import './Home.css'


function Home() {
  return (
    <div className='body'>
        <div>
        <h1>Nnenna Udefi</h1>
        <h2>Website Developer</h2>
        <p>Phone: 09037444013</p>
        <p>Email: miriamudefi@gmail.com</p>
        </div>

        <div>
        <div className='section-title'>
            <h3>Education</h3>
            </div>
        <div className='blocks'>
        <div>
            <p>2021-09 - 2022-01</p>
        </div>
        <div className='section-content'>
            <h3>Frontend Development (HTML, CSS, Js)</h3>
            <p>Sidehustle Internship Program</p>
            <ul>
                <li>Building websites with HTML, CSS, Tailwind and Javascript frameworks</li>
                <li>Collaborated with other interns on capstone projects</li>
            </ul>
        </div>
        </div>
        </div>

        <div>
        <div className='section-title'>
            <h3>Work Experience</h3>
            </div>
        <div className='blocks'>
        <div>
            <p>2021-present</p>
        </div>

        <div className='section-content'>
            <h3>Junior Web developer</h3>
            <p>Easycare ng</p>
            <ul>
                <li>Creation and testing of applications for websites</li>
                <li>Updating existing web applications using scripting languages</li>
                <li>Working under the supervision of Senior developers</li>
                <li>Collaborate with graphic and product designers</li>
            </ul>
        </div>
        </div>
        </div>

        <div>
        <div className='section-title'>
            <h3>Skills</h3>
            </div>

        <div>
            <ul className='section-list'>
                <li>Website development using HTML, CSS, JS</li>
                <li>Proficiency in use of Microsoft office</li>
            </ul>
        </div>
        
        </div>


        <div>
            <div className='section-title'>
                <h3>Software</h3>
            </div>
            
        <div>
            <ul className='section-list'>
                <li>Visual Studio Editor</li>
                <li>Github</li>
                <li>Git</li>
                <li>Netlify</li>
            </ul>
        </div>
        
        </div>




    </div>
    
  )
}

export default Home