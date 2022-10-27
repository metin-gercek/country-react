import React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
//import List from '@mui/material/List';
import Divider from '@mui/material/Divider'
//import ListItem from '@mui/material/ListItem';
//import ListItemButton from '@mui/material/ListItemButton';
//import ListItemIcon from '@mui/material/ListItemIcon';
//import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux'
import { AppState } from '../../types'
//import { Link } from 'react-router-dom'
import FavoriteCountries from '../../pages/FavoriteCountries'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'

//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import MailIcon from '@material-ui/icons/Mail';

type Anchor = 'right'

export default function CartDrawerRight() {
  const themeContext = useContext(ThemeContext)
  const favoriteAmount = useSelector(
    (state: AppState) => state.country.favoriteAmount
  )
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return
        }

        setState({ ...state, [anchor]: open })
      }

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <FavoriteCountries />
      <Divider />
      <Link
        to={`/favoritecountries`}
        style={{ textDecoration: 'none' }}
        color="common.white"
      >
        <Button
          variant="contained"
          color="primary"
          style={themeContext.themeColor}
          sx={{ m: 20 }}
        >
          Go to Favorites
        </Button>
      </Link>
    </Box>
  )

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            variant="contained"
            onClick={toggleDrawer(anchor, true)}
            style={themeContext.themeColor}
          >
            Favorite - {favoriteAmount}
          </Button>
          {/*<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>*/}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}
