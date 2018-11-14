import React from 'react'
import Table from '@material-ui/core/Table/Table'
import TableHead from '@material-ui/core/TableHead/TableHead'
import TableBody from '@material-ui/core/TableBody/TableBody'
import TableRow from '@material-ui/core/TableRow/TableRow'
import TableCell from '@material-ui/core/TableCell/TableCell'
import withStyles from '@material-ui/core/styles/withStyles'
import { Typography } from '@material-ui/core';

const styles = theme => ({
  table: {
    backgroundColor: 'white',
    maxWidth: 400
  },
  naam: {
    maxWidth: 220,
    color: "black"
  },
  aantal: {
    maxWidth: 75,
    color: "black"  
  }
})


const AantalLeerlingenTable = props => {
  const { classes } = props
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell className={classes.naam}>
           <Typography><strong>Naam van de school</strong></Typography>
          </TableCell>
          <TableCell className={classes.aantal}>
          <Typography><strong>Totaal aantal leerlingen</strong></Typography>
          </TableCell>
          <TableCell className={classes.aantal}>
          <Typography><strong>Gemiddeld aantal leerlingen per klas</strong></Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.schools.map((school, i) => (
          <TableRow>
            <TableCell>{props.names[i]}</TableCell>
            <TableCell>{school[2].aantalLeerlingen}</TableCell>
            <TableCell>{Math.floor(school[2].aantalLeerlingen / 8)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default withStyles(styles)(AantalLeerlingenTable)