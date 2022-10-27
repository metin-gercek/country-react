import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../types'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/themeContext'
import {
  TableCell,
  TableRow,
  Button,
  Table,
  TableHead,
  TableContainer,
  TableBody,
} from '@mui/material'
import { removeCountry } from '../redux/actions/countryAction'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const countryImg = {
  width: '5rem',
}

const FavoriteCountries = () => {
  const dispatch = useDispatch()
  const favoriteCountries = useSelector(
    (state: AppState) => state.country.favoriteCountries
  )

  const themeContext = useContext(ThemeContext)
  return (
    <TableContainer sx={{ maxWidth: 650 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Flags</TableCell>
            <TableCell>Favorite Countries</TableCell>

            <TableCell>
              <Link
                to={`/`}
                style={{ textDecoration: 'none' }}
                color="common.white"
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={themeContext.themeColor}
                >
                  <ArrowBackIcon />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {favoriteCountries.map((country) => (
            <TableRow key={country.name.common}>
              <TableCell>
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  style={countryImg}
                />
              </TableCell>
              <TableCell>{country.name.common}</TableCell>
              <TableCell>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => dispatch(removeCountry(country.name.common))}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FavoriteCountries
