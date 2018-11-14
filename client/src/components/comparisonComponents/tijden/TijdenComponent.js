import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import TijdenChart from '../../charts/TijdenChart'
import ColorBubblesNamesContainer from '../ColorBubblesNamesContainer'
import ComparisonHeaderComponent from '../ComparisonHeaderComponent'

const styles = theme => ({
  div: {
    backgroundColor: 'white',
  },
})

const TijdenComponent = props => {
  const { classes: cl } = props
  return (
  <div className={cl.div}>
    <ComparisonHeaderComponent name={'tijden'} />
    <ColorBubblesNamesContainer/>
    <TijdenChart/>
  </div>
)}

export default withStyles(styles)(TijdenComponent)