import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyPhoto from '../../assets/img/me-sl.jpg'
import './CvHeader.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import Grid from '@mui/material/Grid'

import CVDataWork from './CvDataWork'
import CvDataProfile from './CvDataProfile'

const ContactItem = ({ icon, text }) => (
  <div style={{ display: 'flex' }}>
    {icon}
    <p style={{ fontSize: '1.5rem', color: 'var(--main-black)' }}>{text}</p>
  </div>
)

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
          <p>SOFTWARE DEVELOPER</p>
          <div className="cv-contact-info">
            <ContactItem
              icon={
                <LocationOnIcon
                  className="cv-contact-icon"
                  sx={{ fontSize: '2rem' }}
                />
              }
              text="Helsinki, Finland"
            />

            <ContactItem
              icon={
                <MailOutlineIcon
                  className="cv-contact-icon"
                  sx={{ fontSize: '2rem' }}
                />
              }
              text="karinamisnik94@gmail.com"
            />

            <ContactItem
              icon={
                <LocalPhoneIcon
                  className="cv-contact-icon"
                  sx={{ fontSize: '2rem' }}
                />
              }
              text="+358 45 2542500"
            />
          </div>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="left-part">
              {CvDataProfile.map((section, index) => (
                <div key={index} className={section.class}>
                  {section.profile && (
                    <div className="profile">
                      <h3>PROFILE</h3>
                      <p>{section.profile}</p>
                    </div>
                  )}
                  {section.socials && (
                    <div className="social">
                      <h3>SOCIAL</h3>
                      {section.socials.map((social, index) => (
                        <div className="social-links-container" key={index}>
                          {social.icon}
                          <a href={social.link} style={{ marginLeft: '8px' }}>
                            {social.platform}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.education && (
                    <div className="education">
                      <h3>EDUCATION</h3>
                      {section.education.map((edu, index) => (
                        <div key={index}>
                          <h3>{edu.field}</h3>
                          <h4>{edu.school}</h4>
                          <p>{edu.degree}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.languages && (
                    <div className="languages">
                      <h3>LANGUAGES</h3>
                      <p>{section.languages.join(',  ')}</p>
                    </div>
                  )}
                  {section.skills && (
                    <div className="skills">
                      <h3>SKILLS</h3>
                      <ul style={{ columns: '3' }}>
                        {section.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <div className="right-part">
              <div className="work-experience">
                <h3>WORK EXPERIENCE</h3>
                {CVDataWork.map((work, index) => (
                  <div key={index}>
                    <h4 className="work-period">{work.period}</h4>
                    <h4 className="work-place">{work.company}</h4>
                    <h3 className="work-title">{work.position}</h3>
                    <ul>
                      {work.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default CV
