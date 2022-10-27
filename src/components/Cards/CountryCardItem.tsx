import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { AppState } from '../../types'

import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { addCountry } from '../../redux/actions/countryAction'
import { ThemeContext } from '../../context/themeContext'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const CountryCardItem = (props: any) => {
  const dispatch = useDispatch()
  const countriesWithSearch = useSelector(
    (state: AppState) => state.country.favoriteCountries
  )
  //no dublication
  const inCart = countriesWithSearch.some(
    (item: any) => item.name.common === props.name
  )
  const buttonClickHandler = () => {
    dispatch(addCountry(props.name))
  }
  const themeContext = useContext(ThemeContext)
  return (
    <Grid item xs={3}>
      <Item style={themeContext.themeColor}>
        <Card>
          <CardMedia
            component="img"
            alt={props.name}
            width="300"
            image={props.flags.png}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 'bold' }}
              color="text.secondary"
              align="left"
            >
              Population: {props.population}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 'bold' }}
              color="text.secondary"
              align="left"
            >
              Region: {props.region}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 'bold' }}
              color="text.secondary"
              align="left"
            >
              Capital: {props.capital}
            </Typography>
            {Object.values(props.languages).map((c: any, index: number) => (
              <Typography
                variant="body1"
                sx={{ fontWeight: 'bold' }}
                color="text.secondary"
                align="left"
                key={c}
              >
                {' '}
                {index + 1}.Language: {c}
              </Typography>
            ))}
          </CardContent>

          <CardActions>
            <Button
              size="large"
              disabled={inCart}
              onClick={buttonClickHandler}
              variant="contained"
              style={themeContext.themeColor}
            >
              Add
            </Button>
          </CardActions>
        </Card>
      </Item>
    </Grid>
  )
}

export default CountryCardItem
