import React, { useContext, useEffect } from 'react'
import { AppState } from '../types'
import { ThemeContext } from '../context/themeContext'
import { fetchCountries } from '../redux/actions/countryAction'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import TableCell from '@mui/material/TableCell'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function CountryPage() {
  const { name } = useParams<{ name: string }>()
  const dispatch = useDispatch()
  const { countries } = useSelector((state: AppState) => state.country)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])
  const country = countries.find((n: any) => n.name.common === name)
  const themeContext = useContext(ThemeContext)

  if (!country) {
    return (
      <div>
        <h2>No country found</h2>
      </div>
    )
  }

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        image={country.flags.svg}
        alt={country.name.common}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country.name.common}
        </Typography>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Population</TableCell>
                <TableCell>
                  <Typography>{country.population}</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
                <TableCell>Region</TableCell>
                <TableCell>
                  <Typography>{country.region}</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
                <TableCell>Capital</TableCell>
                <TableCell>
                  {country.capital.map((c: any) => (
                    <Typography key={c}>{c}</Typography>
                  ))}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
                <TableCell>Languages</TableCell>
                <TableCell>
                  {Object.values(country.languages).map((lan: any) => (
                    <Typography key={lan}>{lan}</Typography>
                  ))}
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions>
        <Link to={`/`} style={{ textDecoration: 'none' }} color="common.white">
          <Button
            variant="contained"
            color="primary"
            style={themeContext.themeColor}
            sx={{ m: 2 }}
          >
            <ArrowBackIcon />
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default CountryPage
