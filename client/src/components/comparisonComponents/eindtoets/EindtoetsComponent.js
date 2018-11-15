import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import EindtoetsChart from '../../charts/EindtoetsChart'
import ColorBubblesNamesContainer from '../ColorBubblesNamesContainer'
import ComparisonHeaderComponent from '../ComparisonHeaderComponent'

const styles = theme => ({})

const EindtoetsComponent = props => (
  <div>
    <ComparisonHeaderComponent name={'eindtoets'} />
    {/* <ColorBubblesNamesContainer/> */}
     {/* <EindtoetsChart/>  */}
  </div>
)

export default withStyles(styles)(EindtoetsComponent)