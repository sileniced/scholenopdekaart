import { filters, filtersOndertitels } from '../../constants'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography/Typography'

const styles = theme => ({
  header: {
    color: theme.palette.background.default,
  },
  toCenterContainer: {
    display: 'flex',
    flexWrap: 'noWrap',
    justifyContent: 'center',
    padding: 25,
  },
  toColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
})


const ComparisonHeaderComponent = props => {
  const { classes: cl, name } = props
  return (
    <div className={cl.toCenterContainer}>
      <div className={cl.toColumn}>
      <Typography><h2 className={cl.header}>{filters[name]}</h2></Typography>
          <Typography>{filtersOndertitels[name]}</Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(ComparisonHeaderComponent)