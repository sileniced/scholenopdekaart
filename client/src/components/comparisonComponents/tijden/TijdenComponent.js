import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import TijdenChart from '../../charts/TijdenChart'

const styles = theme => ({})

const TijdenComponent = props => (
  <div>
    <TijdenChart/>
  </div>
)

export default withStyles(styles)(TijdenComponent)