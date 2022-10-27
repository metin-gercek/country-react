import React, { useContext } from 'react'
import { TableRow, TableCell, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../types'

import { addCountry } from '../../redux/actions/countryAction'
import { ThemeContext } from '../../context/themeContext'

const TableBottom = (props: any) => {
  const dispatch = useDispatch()
  const countriesWithSearch = useSelector(
    (state: AppState) => state.country.favoriteCountries
  )

  //no dublication
  const inCart = countriesWithSearch.some(
    (item) => item.name.common === props.name
  )
  const buttonClickHandler = () => {
    dispatch(addCountry(props.name))
  }
  const themeContext = useContext(ThemeContext)

  return (
    <TableRow>
      <TableCell align="center">
        <img
          src={props.flags.png}
          alt={props.name}
          style={{ width: '100px' }}
        />
      </TableCell>
      <TableCell align="center">
        <Typography>{props.name}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography>{props.population}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography>{props.capital}</Typography>
      </TableCell>
      <TableCell align="center">
        {Object.values(props.languages).map((c: any) => (
          <Typography key={c}>{c}</Typography>
        ))}
      </TableCell>
      <TableCell align="center">
        <Typography>{props.region}</Typography>
      </TableCell>
      <TableCell align="center">
        <Link
          to={`/country/${props.name}`}
          style={{ textDecoration: 'none' }}
          color="common.white"
        >
          <Button
            variant="contained"
            color="primary"
            style={themeContext.themeColor}
          >
            Details
          </Button>{' '}
        </Link>
      </TableCell>
      <TableCell align="center">
        <Button
          onClick={buttonClickHandler}
          disabled={inCart}
          variant="contained"
          color="primary"
          style={themeContext.themeColor}
        >
          Add
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default TableBottom
