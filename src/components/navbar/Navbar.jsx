import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import styled from 'styled-components'

const drawerWidth = 240
const navItems = ['About', 'Stack', 'Work', 'Socials', 'CV']
const CustomSpan = styled.span`
  color: var(--white);
`

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function DrawerAppBar() {
  const { window } = navItems
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', color: 'var(--main-red)' }}
    >
      <Typography
        variant="h4"
        sx={{ my: 2, fontFamily: 'var(--font-primary)' }}
      >
        Profile
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                cursor: 'pointer',
              }}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: 'var(--main-black)',
          borderBottom: '3px solid rgba(84, 81, 81, 0.899)',
          boxShadow: '0 0 20px 6px var(--main-blue)',
          height: '7rem',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: 'none' },
              color: 'var(--main-red)',
              fontFamily: 'var(--font-primary)',
            }}
          >
            <MenuIcon sx={{ fontSize: 20 }} />
            <Typography
              variant="h4"
              component="div"
              sx={{
                display: { xs: 'flex' },

                fontFamily: 'var(--font-emphasize)',
              }}
            >
              Karyna <CustomSpan>.</CustomSpan>
            </Typography>
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              color: 'var(--main-red)',
              fontFamily: 'var(--font-emphasize)',
            }}
          >
            Karyna <CustomSpan>.</CustomSpan>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, height: '7rem' }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                sx={{
                  color: 'var(--main-light-gray)',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  borderRadius: 'unset',
                  padding: '2rem',
                  height: '100%',
                  '&:hover': {
                    backgroundColor: 'red',
                    background:
                      'linear-gradient(  to top, rgba(84, 81, 81, 0.899) 0%, rgba(0, 0, 0, 0.5) 100%)',
                    color: 'var(--main-red)',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
