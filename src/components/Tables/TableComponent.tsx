import React, { useState } from 'react'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
} from '@mui/material'
import TableBottom from './TableBottom'
import { useDispatch } from 'react-redux'
import {
  sortCountries,
  sortPopulation,
} from '../../redux/actions/countryAction'

function TableComponent(props: any) {
  const dispatch = useDispatch()

  const [sortState, setSortState] = useState(false)
  const sortAsc = () => {
    setSortState(!sortState)
    dispatch(sortCountries('asc'))
  }
  const sortDesc = () => {
    setSortState(!sortState)
    dispatch(sortCountries('desc'))
  }
  const sorthighToLow = () => {
    setSortState(!sortState)
    dispatch(sortPopulation('highToLow'))
  }
  const sortlowToHigh = () => {
    setSortState(!sortState)
    dispatch(sortPopulation('lowToHigh'))
  }
  //  console.log(props.tableData[0])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell key={Math.random()} align="center">
              Flags
            </TableCell>
            <TableCell
              align="center"
              key={Math.random()}
              onClick={() => {
                sortState ? sortAsc() : sortDesc()
              }}
            >
              Name
            </TableCell>
            <TableCell
              key={Math.random()}
              align="center"
              onClick={() => {
                sortState ? sorthighToLow() : sortlowToHigh()
              }}
            >
              Population
            </TableCell>
            <TableCell key={Math.random()} align="center">
              Capital
            </TableCell>
            <TableCell key={Math.random()} align="center">
              Language
            </TableCell>
            <TableCell key={Math.random()} align="center">
              Region
            </TableCell>
            <TableCell key={Math.random()} align="center">
              Detail
            </TableCell>
            <TableCell key={Math.random()} align="center">
              Favorite
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tableData.map((data: any) => {
            return (
              <TableBottom
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
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent
