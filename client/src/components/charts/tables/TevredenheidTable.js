import React from 'react'
import Table from '@material-ui/core/Table/Table'
import TableHead from '@material-ui/core/TableHead/TableHead'
import TableBody from '@material-ui/core/TableBody/TableBody'
import TableRow from '@material-ui/core/TableRow/TableRow'
import TableCell from '@material-ui/core/TableCell/TableCell'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  table: {
    backgroundColor: 'white',
    maxWidth: 400
  },
  naam: {
    maxWidth: 250
  },
  aantal: {
    maxWidth: 75
  }
})


const AantalLeerlingenTable = props => {
  const { classes } = props
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell className={classes.naam}>
            naam van de school
          </TableCell>
          <TableCell className={classes.aantal}>
            leerlingen
          </TableCell>
          <TableCell className={classes.aantal}>
            ouders
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.schools.map(school=> (
          <TableRow>
          {console.log(school.tevredenheid)}
            <TableCell>{school.name}</TableCell>
            <TableCell>{Math.round(school.tevredenheid.score * 10) / 10 }</TableCell>
            <TableCell>{Math.round(school.tevredenheid.scoreVergelijking * 10) / 10}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default withStyles(styles)(AantalLeerlingenTable)