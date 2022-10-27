import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../types'

const Cart = () => {
  const favoriteAmount = useSelector(
    (state: AppState) => state.country.favoriteAmount
  )
  return (
    <Button variant="contained">
      <Link to="/favoritecountries">Favorite - {favoriteAmount}</Link>
    </Button>
  )
}

export default Cart
