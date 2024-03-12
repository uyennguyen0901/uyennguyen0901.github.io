import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Preloader from './Preloader';
import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import yensao from './imgs/Yensao.png'
import foxipe from './imgs/Foxipe.png'
import animation from './imgs/animationgame.png'
import hole from './imgs/holeinground.png'
import Option from './OptionsList';
import Intro from './Intro';

const ProgressBar = ({label, percentage}) => {
  const progressRef = useRef();

  useEffect(() => {
    const progress = progressRef.current;
    progress.style.width = `${percentage}%`;
  }, [percentage]);

  return (
    <div className="progress" data-aos="fade-right" data-aos-duration="2500">
      <span className="skill">{label} <i className="val">{percentage}%</i></span>
      <div className="progress-bar-wrap">
        <div ref={progressRef} className="progress-bar" role="progressbar" style={{width: 0}}  aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  );
};



function App() {
  const onButtonClick = () => {
    // using JavaScript method to get PDF file
    fetch('Resume.pdf')
      .then(response => response.blob())
      .then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;

        alink.download = 'Resume.pdf';
        alink.click();
      });
  };
  /**
   * Animation on scroll
   */
    window.addEventListener('load', () => {
      AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
      });
    });
    const [isSent, setIsSent] = useState(false);

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
  });
  const validateEmail = (email) => {
    // The regex pattern matches any string that:
    // - starts with any sequence of non-whitespace characters before the @ symbol
    // - followed by the domain "example.com"
    const pattern =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    return pattern.test(email);
  };
  const handleClick = (e) => {
    e.preventDefault(); 

    if (formData.name && formData.subject && formData.message) {
      // console.log(formData.name);
      // console.log(formData.subject);
      // console.log(formData.message);
      // console.log(formData.email);
        if (validateEmail(formData.email)) {
            // Your logic for a successful form submission goes here
            setIsSent(true);
        } else {
            alert('Please enter a valid email from the domain example.com!');
        }
    } else {
        alert('Please fill out all the fields!');
    }
  fetch('http://localhost:3000/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  }),
})
.then(response => response.json()) // Ensuring response is parsed as JSON
.then(data => {
  // console.log(data);
  setIsSent(true); // Update state based on successful operation
})
.catch(error => console.error('Error:', error));


  };

  return (
    <div className="App">
     
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent"> 
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item tab-content mx-3">
                <a className="nav-link custom-link" aria-current="page" href="#resume"><i class="bi bi-emoji-wink-fill"></i> Experiences</a>
              </li>
              <li className="nav-item tab-content mx-3">
                <a className="nav-link custom-link" aria-current="page" href="#projects"><i class="bi bi-person-circle"></i> My Personal Work!</a>
              </li>
              <li className="nav-item tab-content mx-3">
                <a className="nav-link custom-link" aria-current="page" href="#contact"><i class="bi bi-envelope-at-fill"></i> Email Me!</a>
              </li>
              <li className="nav-item tab-content mx-3">
                <a className="nav-link custom-link" href="https://www.linkedin.com/in/minh-uyen-nguyen-86741218b/"><i className="bi bi-linkedin"></i> Connect Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <section  class="section-bg">
        <div class="container" data-aos="fade-up">
          <Intro />
        </div>
      </section>
      <br />
      <section id="resume" class="resume section-bg">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Resume</h2>
            {/* <p>#Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>

          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>Minh Uyen Nguyen</h4>
                <p>
                  <em>
                  </em>
                </p>
                <p>
                <ul>
                  <li>Minneapolis, MN 55408</li>
                  <li>(XXX) XXX-XXXX</li>
                  <li>knnguy5105@gmail.com</li>
                </ul>
                </p>
              </div>

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Bachelor of Computer Science</h4>
                <h5>2022 - 2024</h5>
                <p><em>University of Minnesota Twin Citites, MN</em></p>
              </div>
              <div class="resume-item">
                <h4>Associate of Computer Science Transfer Pathway</h4>
                <h5>2020 - 2022</h5>
                <p><em>Normandale Community College, Bloomington, MN</em></p>
                
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Pass Leader</h4>
                <h5>2021 - 2022</h5>
                <p><em>Normandale Community College, Bloomington, MN</em></p>
                <p>
                <ul>
                  <li>Led weekly study groups in Calculus 1 and Principle Chemistry, aiding students in understanding complex mathematical and chemical concepts.</li>
                  <li>Worked closely with professors to ensure the accuracy of information shared and to stay updated on curriculum developments.</li>
                  <li>Developed and implemented effective teaching strategies that improved student understanding of course materials by 30%.</li>
                  <li>Assisted students in academic planning, coursework, and preparation for examinations.</li>
                </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Programmer and Editor</h4>
                <h5>October 2020 - April 2021 (7 months)</h5>
                <p><em>NASA's MnSGC Quadcopter Challenge via Normandale's STEM Club</em></p>
                <p>
                <ul>
                  <li>Played a key role as part of a six-member team, tasked with designing a lightweight microcontroller-based sensor suite for a quadcopter intended for campus exploration using C.</li>
                  <li>Utilized Python for connecting real-time communication devices with the sensor module for collecting data.</li>
                  <li>Leveraged multimedia skills to create and edit promotional and educational videos for the team. Content developed successfully highlighted the team's technical acumen, progress, and achievements to a broad audience, boosting engagement and fostering learning.</li>
                  <li>Exhibited strong team player skills, technical problem-solving, and cross-disciplinary collaboration capabilities, contributing significantly to the overall success of the project.</li>
                </ul>
                <p><a href="https://www.mnspacegrant.org/quadcopter-challenge-winners/">External resources</a></p>
                </p>
              </div>
            </div>
          </div>
          <div class="d-grid gap-4 col-6 mx-auto">
            <button onClick={onButtonClick}>Download Resume</button>
          </div>
        </div>
      </section>
      <br />
      <section id="skills" class="skills section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Skills</h2>
            <p>You will find a collection of projects that showcase my capabilities and growth as a developer. Each project has been an opportunity to learn, experiment, and refine my skills. As I continue to learn and improve, I look forward to facing new challenges, working with diverse teams, and contributing meaningfully to futher projects.</p>
          </div>
          <div class="row skills-content">
            <div class="col-lg-6">
              <ProgressBar label="HTML" percentage={100} />
              <ProgressBar label="CSS" percentage={75} />
              <ProgressBar label="JavaScript" percentage={70} />
              <ProgressBar label="React JS" percentage={70} />
              <ProgressBar label="Node JS" percentage={65} />
              <ProgressBar label="Express" percentage={50} />
              <ProgressBar label="SQL" percentage={75} />
            </div>
            <div class="col-lg-6">
              <ProgressBar label="C" percentage={65} />
              <ProgressBar label="C++" percentage={55} />
              <ProgressBar label="Python" percentage={75} />
              <ProgressBar label="Java" percentage={55} />
            </div>
          </div>
        </div>
        < br/>
      </section>
      <br />
      <section>
        <div class="container" data-aos="fade-up"  id="projects">
          <div class="section-title">
            <h2>Projects</h2>
            <div class="project">
              <div class="project-left">
                <a href="https://project-1-airfox.onrender.com/">
                  <img src={foxipe} alt="foxipe"/>
                  <span className="link" style={{ transform: "translate(0px, 0px)" }}>Foxipe</span>
                  <span class="overlay" style={{ transformOrigin: '0px 0px', transform: 'scale(1, 0)' }}></span>
                </a>
              </div>
            </div>
            <div class="project">
              <div class="project-left">
                <a href="https://csci-4611-spring-2024.github.io/assignment-2-uyennguyen0901/">
                  <img src={hole} alt="hole"/>
                  <span className="link" style={{ transform: "translate(0px, 0px)" }}>Hole in the Ground</span>
                  <span class="overlay" style={{ transformOrigin: '0px 0px', transform: 'scale(1, 0)' }}></span>
                </a>
              </div>
            </div>
            {/* <div class="project">
              <div class="project-left">
                <a href="#">
                  <img src={yensao} alt="yensao"/>
                  <span className="link" style={{ transform: "translate(0px, 0px)" }}>Yen Sao Phuong Dinh</span>
                  <span class="overlay" style={{ transformOrigin: '0px 0px', transform: 'scale(1, 0)' }}></span>
                </a>
              </div>
            </div> */}
            <div class="project">
              <div class="project-left">
                <a href="https://minhuyen.fun/">
                  <img src={animation} alt="animation"/>
                  <span className="link" style={{ transform: "translate(0px, 0px)" }}>Animation in Game</span>
                  <span class="overlay" style={{ transformOrigin: '0px 0px', transform: 'scale(1, 0)' }}></span>
                </a>
              </div>
            </div>
            {/* <div class="project">
              <div class="project-left">
                <a href="#">
                  <img src={yensao} alt="yensao"/>
                  <span className="link" style={{ transform: "translate(0px, 0px)" }}>Yen Sao Phuong Dinh</span>
                  <span class="overlay" style={{ transformOrigin: '0px 0px', transform: 'scale(1, 0)' }}></span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <br />
      <section>
        <div class="container" id="contact">
          <div data-aos="fade-up">
            <div class="section-title">
              <h2>Contact</h2>
              <p>I'm always eager to discuss new projects, collaboration opportunities, or just chat about all things web development. Feel free to get in touch with me through any of the following channels:</p>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <form action="/send-email" method="post" role="form" class="email-form">
                  <div class="form-group mt-3">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required onChange={e => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div class="form-group mt-3">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required onChange={e => setFormData({ ...formData, email: e.target.value })}/>
                  </div>
                  
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required onChange={e => setFormData({ ...formData, subject: e.target.value })}/>
                  </div>
                  <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
                  </div>
                  <div class={`my-3 ${isSent ? 'd-block' : 'd-none'}`}>
                    <div class="error-message"></div>
                    <div class="sent-message">Thank you for reaching out! I'll get back to you within two business days.</div>
                  </div>
                  <div class="text-center">
                    <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND" onClick={handleClick}>
                      <div class="alt-send-button">
                        <i class="bi bi-send"></i><span class="send-text">SEND</span>
                      </div>
                    </button>
                  </div>
                </form> 
              </div>
              <div class="col-lg-6">
                <div className="direct-contact-container d-flex flex-column align-items-center mt-4">
                  <ul className="list-group list-unstyled d-flex flex-column mb-4">
                    <li className="list-group-item d-flex justify-content-between border-0">
                      <i class="bi bi-geo-alt-fill mr-4 larger-icon"></i>
                      <span className="contact-text place">Minneapolis, Minnesota, 55408</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between border-0">
                      <i class="bi bi-telephone-fill mr-4 larger-icon"></i>
                      <span className="contact-text phone">
                        <a href="tel:1-612-438-8177" title="Give me a call">(XXX) XXX-XXXX</a>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between border-0">
                      <i class="bi bi-envelope-fill mr-4 larger-icon"></i>
                      <span className="contact-text gmail">
                        <a href="mailto:knnguy5105@gmail.com" title="Send me an email">knnguy5105@gmail.com</a>
                      </span>
                    </li>
                  </ul>
                  <hr className="straight-line"/>
                  <div class="social d-flex justify-content-center">
                    <a class="mx-2 icon-circle p-2 rounded-circle" href="https://github.com/uyennguyen0901"><i class="bi bi-github"></i></a>
                    <a class="mx-2 icon-circle p-2 rounded-circle" href="https://www.facebook.com/minhuyen.nguyen.161/"><i class="bi bi-facebook"></i></a>
                    <a class="mx-2 icon-circle p-2 rounded-circle" href="https://www.linkedin.com/in/minh-uyen-nguyen-86741218b/"><i class="bi bi-linkedin"></i></a>
                  </div>
                  <hr className="straight-line"/>
                  <div class="copyright d-flex justify-content-center">&copy; ALL OF THE RIGHTS RESERVED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <Preloader />
    </div>
  );
}

export default App;
