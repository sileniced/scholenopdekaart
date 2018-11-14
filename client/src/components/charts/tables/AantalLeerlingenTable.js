import React from 'react'
import Table from '@material-ui/core/Table/Table'
import TableHead from '@material-ui/core/TableHead/TableHead'
import TableBody from '@material-ui/core/TableBody/TableBody'
import TableRow from '@material-ui/core/TableRow/TableRow'
import TableCell from '@material-ui/core/TableCell/TableCell'

const AantalLeerlingenTable = props => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            naam van de school
          </TableCell>
          <TableCell>
            totaal aantal leerlingen
          </TableCell>
          <TableCell>
            gemiddeld aantal leerlingen per klas
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
      </TableBody>
    </Table>
  )
}

export default AantalLeerlingenTable