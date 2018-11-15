import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import VerdelingLestijdenChart from '../../charts/VerdelingLestijdenChart'
import ComparisonHeaderComponent from '../ComparisonHeaderComponent'

const styles = theme => ({
  div: {
    backgroundColor: 'white',
  },
})

const VerdelingLestijden = props => {
  const { classes: cl } = props
  return (
    <div className={cl.div}>
      <ComparisonHeaderComponent name={'verdelingLestijden'}/>
      <VerdelingLestijdenChart/>
    </div>
  )
}

export default withStyles(styles)(VerdelingLestijden)