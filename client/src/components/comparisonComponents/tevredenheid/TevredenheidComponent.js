import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import ComparisonHeaderComponent from '../ComparisonHeaderComponent'
import TevredenheidTableContainer from '../../charts/tables/TevredenheidTableContainer'

const styles = theme => ({

  div: {
    backgroundColor: 'white',
  },
})

const TevredenheidComponent = props => (
  <div className={props.classes.div}>
    <ComparisonHeaderComponent name={'tevredenheid'}/>
    <TevredenheidTableContainer/>
  </div>
)

export default withStyles(styles)(TevredenheidComponent)