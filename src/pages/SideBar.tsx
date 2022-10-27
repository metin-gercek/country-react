import React, { useCallback, useContext, useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  MenuItem,
} from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import TableComponent from '../components/Tables/TableComponent'
//import Cart from '../components/Cart/Cart'
import SearchBar from '../components/SearchBar/SearchBar'
import { ThemeContext } from '../context/themeContext'
import { green, red, blue } from '@mui/material/colors'
import TextField from '@mui/material/TextField'
//import Routes from '../Routes'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../types'
import { fetchCountries } from '../redux/actions/countryAction'
import CountriesCardsContainer from '../components/Cards/CountriesCardsContainer'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import SwipeableTemporaryDrawer from '../components/Cart/CartDrawerRight'

const tableHeader = [
  'Flag',
  'Name',
  'Population',
  'Capital',
  'Language',
  'Region',
  'Detail',
  'Favorite',
]
const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function SideBar(props: any) {
  // Get All Country
  const dispatch = useDispatch()
  const { countries } = useSelector((state: AppState) => state.country)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  //search country

  const [search, setSearch] = useState('')
  const setSearchHandler = useCallback((countryName: string) => {
    setSearch(countryName)
  }, [])

  const countriesWithSearch = countries.filter((country: any) => {
    let byName = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase())

    return byName
  })
  //theme context
  const { setBlueTheme, setGreenTheme, setRedTheme, setYourTheme } =
    useContext(ThemeContext)
  const themeContext = useContext(ThemeContext)

  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const [toggle, setToggle] = useState(true)
  const toggleChecked = () => setToggle((toggle) => !toggle)

  //toggle buttonl

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={themeContext.themeColor}>
        <Toolbar sx={{ display: 'flex' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 4, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, ml: 3 }}
          >
            Countries
          </Typography>
          <SearchBar onSearch={setSearchHandler} />

          {/*<Typography align="justify">
            <Cart />
          </Typography>*/}
          <SwipeableTemporaryDrawer />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton onClick={() => setBlueTheme()}>
              <ListItemIcon>
                <IconButton size="small" sx={{ ml: 2 }}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: blue[500],
                      marginRight: '5px',
                    }}
                    color="primary"
                  >
                    B
                  </Avatar>
                </IconButton>
              </ListItemIcon>
              <ListItemText>Blue</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => setRedTheme()}>
              <ListItemIcon>
                <IconButton size="small" sx={{ ml: 2 }} color="error">
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: red[500],
                      marginRight: '5px',
                    }}
                  >
                    R
                  </Avatar>
                </IconButton>
              </ListItemIcon>
              <ListItemText>Red</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => setGreenTheme()}>
              <ListItemIcon>
                <IconButton size="small" sx={{ ml: 2 }} color="success">
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: green[500],
                      marginRight: '5px',
                    }}
                  >
                    G
                  </Avatar>
                </IconButton>
              </ListItemIcon>
              <ListItemText>Green</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <IconButton size="small" sx={{ ml: 2 }} aria-haspopup="true">
                  <Avatar sx={{ width: 32, height: 32 }}>Y</Avatar>
                </IconButton>
              </ListItemIcon>
              <ListItemText>Your Theme</ListItemText>
            </ListItemButton>
          </ListItem>

          <MenuItem
            onChange={(event) =>
              setYourTheme((event.target as HTMLInputElement).value)
            }
          >
            <TextField
              id="outlined-basic"
              label="Enter your theme color/code"
              variant="outlined"
            />
          </MenuItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ToggleButtonGroup
              color="primary"
              value={toggle}
              exclusive
              onChange={toggleChecked}
              aria-label="Platform"
              sx={{ mx: 'auto', width: 200 }}
            >
              <ToggleButton
                value={toggle}
                size="large"
                sx={{ width: 150, height: 80 }}
              >
                List
              </ToggleButton>
              <ToggleButton
                value={!toggle}
                size="large"
                sx={{ width: 150, height: 80 }}
              >
                Card
              </ToggleButton>
            </ToggleButtonGroup>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {toggle && (
          <TableComponent
            tableHeader={tableHeader}
            tableData={countriesWithSearch}
          />
        )}
        {!toggle && (
          <CountriesCardsContainer countryData={countriesWithSearch} />
        )}
      </Main>
    </Box>
  )
}
