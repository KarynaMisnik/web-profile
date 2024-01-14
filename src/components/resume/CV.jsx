import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyPhoto from '../../assets/img/me-sl.jpg'
import './CvHeader.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import Grid from '@mui/material/Grid'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const CV = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  return (
    <>
      {/*<button onClick={goToHome}>Home</button>*/}
      <div className="cv-wrapper">
        <div className="cv-header">
          <div className="cv-img-container">
            <img src={MyPhoto} alt="photo of Karyna" />
          </div>
          <h3>KARYNA MISNIK</h3>
          <h3>SOFTWARE DEVELOPER</h3>
          <div className="cv-contact-info">
            <p>
              <LocationOnIcon className="cv-contact-icon" />
              Helsinki, Finland
            </p>

            <p>
              <MailOutlineIcon className="cv-contact-icon" />
              karinamisnik94@gmail.com
            </p>

            <p>
              <LocalPhoneIcon className="cv-contact-icon" />
              +358 45 2542500
            </p>
          </div>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <div
              className="left-part"
              style={{ borderRight: '3px solid var(--main-black)' }}
            >
              <div className="profile">
                <h3>PROFILE</h3>
                <p>
                  With my recent graduation and a strong affinity for web
                  development, I'm enthusiastic about embracing the world of
                  coding.
                </p>
              </div>
              <div className="social">
                <h3>SOCIAL</h3>
                <a>
                  <LinkedInIcon /> LinkedIn
                </a>
                <a>
                  <GitHubIcon /> GitHub
                </a>
              </div>
              <div className="education">
                <div>
                  <h3>SOFTWARE DEVELOPER</h3>
                  <h4>Omnia Vocational School</h4>
                  <p>2021-2023</p>
                </div>
                <div>
                  <h3>INTEGRATION STUDY</h3>
                  <h4>Careeria</h4>
                  <p>2020</p>
                </div>
                <div>
                  <h3>ENGLISH TEACHER, TRANSLATOR</h3>
                  <h4>Vitebsk State University named after P.M.Masherov</h4>
                  <p>2010-2015</p>
                </div>
              </div>
              <div className="languages">
                <h4>English(Advanced)</h4>
                <h4>Finnish(A2.2)</h4>
                <h4>Belarusian(Native)</h4>
                <h4>Russian(Fluent)</h4>
              </div>
              <div className="skills">
                <ul>
                  <li>Figma</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>JS</li>
                  <li>SQL</li>
                  <li>PHP</li>
                  <li>GIT</li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <div className="right-part">
              <div className="work-experience">
                <h3>WORK EXPERIENCE</h3>
                <div>
                  <h4>January-March 2023</h4>
                  <h4>Hydrohex</h4>
                  <h3>SOFTWARE DEVELOPER INTERN</h3>
                  <ul>
                    <li>
                      Collaborated with internal teams to develop dashboards and
                      improve components based on client feedback;
                    </li>
                    <li>
                      Developed web applications using React with both JS and
                      TS;
                    </li>
                    <li>
                      Designed and implemented a web app prototype for specific
                      use cases using the Laravel back-end framework;
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>October - November 2020</h4>
                  <h4>Kielo International School</h4>
                  <h3>TEACHER ASSISSTANT</h3>
                  <ul>
                    <li>
                      Supported the teacher in managing the classroom, resulting
                      in improved focus and reduced disruptions;
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>November - July (2018-2019)</h4>
                  <h4>Panda English School</h4>
                  <h3>ENGLISH TEACHER</h3>
                  <ul>
                    <li>
                      Assisted students in raising their average test scores;
                    </li>
                    <li>
                      Designed and implemented interactive lesson plans that
                      increased student engagement;
                    </li>
                    <li>
                      Engaged in regular communication with parents, providing
                      updates on student progress and addressing concerns
                      promptly;
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>September - September (2017-2019)</h4>
                  <h4>Zaochnik.com</h4>
                  <h3>EDUCATIONAL WORKER</h3>
                  <ul>
                    <li>
                      Created an extensive library of educational resources,
                      including study guides and reference materials,
                      facilitating students' independent learning;
                    </li>
                    <li>
                      Conducted thorough evaluations of final assignments and
                      projects, ensuring high-quality work and adherence to
                      academic standards;
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>August - August (2015-2017)</h4>
                  <h4>Orsha State School no.2</h4>
                  <h3>ENGLISH TEACHER</h3>
                  <ul>
                    <li>
                      Designed creative assignments that encouraged critical
                      thinking and language application, resulting in more
                      nuanced student work;
                    </li>
                    <li>
                      Participated in grading assignments and providing
                      constructive feedback to promote learning;
                    </li>
                    <li>
                      Organized community events related to English language and
                      literature, promoting a culture of learning beyond the
                      classroom;
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default CV
