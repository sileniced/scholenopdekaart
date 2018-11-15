import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import AantalLeerlingenChartContainer from '../../charts/AantalLeerlingenChartContainer'

const styles = theme => ({})

const LeerlingenComponent = props => (
  <div>
    <AantalLeerlingenChartContainer />
  </div>
)

export default withStyles(styles)(LeerlingenComponent)