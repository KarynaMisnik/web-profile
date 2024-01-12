import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyPhoto from '../../assets/img/me-sl.jpg'
import './CvHeader.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

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
          <h1>KARYNA MISNIK</h1>
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
      </div>
    </>
  )
}

export default CV
