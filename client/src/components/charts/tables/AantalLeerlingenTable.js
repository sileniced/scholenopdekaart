import React from "react";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  table: {
    backgroundColor: "white",
    maxWidth: 400,
    style: {
      fontFamily: [
        "Proxima Nova",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(",")
    }
  },
  naam: {
    maxWidth: 220,
    color: "black"
  },
  aantal: {
    maxWidth: 75,
    color: "black",
    paddingLeft: "0px",
    paddingTop: "0px",
    textAlign: "center",  
  }
});

const AantalLeerlingenTable = props => {
  const { classes } = props;
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell className={classes.naam}>
            <Typography>
              <strong>Naam van de school</strong>
            </Typography>
          </TableCell>
          <TableCell className={classes.aantal}>
            <Typography>
              <strong>Totaal aantal leerlingen</strong>
            </Typography>
          </TableCell>
          <TableCell className={classes.aantal}>
            <Typography>
              <strong>Gem. aantal leerlingen per klas</strong>
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.schools.map((school, i) => (
          <TableRow>
            <TableCell style={{color:"grey", textAlign:"right", fontSize: 11}}>{props.names[i]}</TableCell>
            <TableCell style={{padding: 15}}>{school[2].aantalLeerlingen}</TableCell>
            <TableCell style={{padding: 15}}>{Math.floor(school[2].aantalLeerlingen / 8)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default withStyles(styles)(AantalLeerlingenTable);
