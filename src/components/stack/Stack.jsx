import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { Tooltip, Grid, styled } from '@mui/material'

const skills = [
  { name: 'Figma', icon: faFigma, className: 'item-1' },
  { name: 'HTML5', icon: faHtml5, className: 'item-5' },
  { name: 'CSS3', icon: faCss3, className: 'item-6' },
  { name: 'ReactJS', icon: faReact, className: 'item-7' },
  { name: 'PHP', icon: faPhp, className: 'item-3' },
  { name: 'SQL', icon: faDatabase, className: 'item-4' },
]

const SkillButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  width: '65px',
  height: '65px',
  textAlign: 'center',
  fontSize: '3rem',
  color: 'var(--white)',
  borderRadius: '8px',
  backgroundColor: 'var(--main-black)',
})

const CustomHeader = styled('h2')({
  fontFamily: 'var(--font-primary)',
})

const Stack = () => {
  return (
    <section
      id="stack"
      className="skills-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'var(--main-red)',
      }}
    >
      <div className="skills-section-header">
        <CustomHeader
          variant="h2"
          sx={{
            color: 'var(--main-black)',
            paddingTop: '1rem',
            fontSize: {
              xs: '4rem',
              md: '6rem',
            },
          }}
        >
          My <span style={{ color: 'var(--white)' }}>stack</span>
        </CustomHeader>
      </div>
      <Grid
        container
        spacing={2}
        sx={{ padding: '4rem 0' }}
        className="skillbox"
      >
        {skills.map((skill, index) => (
          <Grid item key={index} xs={4} sm={4} md={2} lg={2}>
            <Tooltip
              title={
                <p
                  style={{
                    fontSize: '2rem',
                  }}
                >
                  {skill.name}
                </p>
              }
            >
              <SkillButton className={`skillbox-item ${skill.className}`}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={skill.icon} />
                </a>
              </SkillButton>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default Stack
