import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CountryCardItem from './CountryCardItem'
import { ThemeContext } from '../../context/themeContext'

const CountryCardsContainer = (props: any) => {
  const themeContext = useContext(ThemeContext)

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {' '}
        {props.countryData.map((data: any) => {
          return (
            <CountryCardItem
              style={themeContext.themeColor}
              flags={data.flags}
              languages={data.languages}
              capital={data.capital}
              name={data.name.common}
              population={data.population}
              region={data.region}
              key={Math.random()}
            />
          )
        })}
      </Grid>
    </Box>
  )
}

export default CountryCardsContainer
