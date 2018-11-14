import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography/Typography'
import DoneIcon from 'mdi-react/DoneIcon'
import TableRow from '@material-ui/core/TableRow/TableRow'
import Table from '@material-ui/core/Table/Table'
import TableCell from '@material-ui/core/TableCell/TableCell'

const styles = {
  tables: {
    backgroundColor: 'white',
    maxWidth: 300,
  },
  td: {
    // border: '1px solid black',
  },
  names: {
    width: 20,
    transform: 'rotate(315deg)',
  },
}

const SpecialistenTable = props => (
  <Table className={props.classes.tables}>
    <TableRow>
      <TableCell/>
      {props.schools.map(school => (
        <TableCell className={props.classes.names}>
          {school.name}
        </TableCell>
      ))}
    </TableRow>
    {props.specialisten.map(specialist => (
      <TableRow>
        <TableCell className={props.classes.td}>
          <Typography>
            {specialist}
          </Typography>
        </TableCell>
        {props.schools.map(school => (
          <TableCell className={props.classes.td}>
            {school.specialisten[specialist] ? <DoneIcon/> : ''}
          </TableCell>
        ))}
      </TableRow>
    ))}
  </Table>
)

export default withStyles(styles)(SpecialistenTable)