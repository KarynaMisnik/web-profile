import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'

const CvDataProfile = [
  {
    profile:
      "With my recent graduation and a strong affinity for web development, I'm enthusiastic about embracing the world of coding.",
  },
  {
    socials: [
      {
        platform: 'LinkedIn',
        icon: (
          <LinkedInIcon
            sx={{
              fontSize: '2rem',
            }}
          />
        ),
        link: 'https://www.linkedin.com/in/your-linkedin-profile',
      },
      {
        platform: 'GitHub',
        icon: <GitHubIcon sx={{ fontSize: '2rem' }} />,
        link: 'https://github.com/your-github-profile',
      },
      {
        platform: 'Web Page',
        icon: <LinkIcon sx={{ fontSize: '2rem', rotate: '-45deg' }} />,
        link: 'https://karynamisnik.github.io/web-profile/',
      },
    ],
  },
  {
    education: [
      {
        field: 'SOFTWARE DEVELOPER',
        school: 'Omnia Vocational School',
        degree: '2021-2023',
      },
      { field: 'INTEGRATION STUDY', school: 'Careeria', degree: '2020' },
      {
        field: 'ENGLISH TEACHER, TRANSLATOR',
        school: 'Vitebsk State University named after P.M.Masherov',
        degree: '2010-2015',
      },
    ],
  },
  {
    languages: [
      'English(Advanced)',
      'Finnish(A2.2)',
      'Belarusian(Native)',
      'Russian(Fluent)',
    ],
  },
  {
    skills: ['Figma', 'HTML', 'CSS', 'React', 'JS', 'SQL', 'PHP', 'GIT'],
  },
]

export default CvDataProfile
