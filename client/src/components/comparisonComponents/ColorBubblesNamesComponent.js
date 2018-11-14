import React from 'react'
import { comparisonColors } from '../../theme'
import Typography from '@material-ui/core/Typography/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const dot = num => ({
  height: 15,
  width: 15,
  backgroundColor: comparisonColors[num][500],
  borderRadius: '50%',
  display: 'inline-block',
})


const styles = theme => ({
  0: dot(0),
  1: dot(1),
  2: dot(2),
  3: dot(3),
  4: dot(4),
  toCenter: {
    display: 'flex',
    flexWrap: 'noWrap',
  },
  toCenterContainer: {
    display: 'flex',
    flexWrap: 'noWrap',
    justifyContent: 'center',
    padding: 25
  },
  type: {
    marginLeft: 10
  }
})

const ColorBubblesNamesComponent = props => {
  const { classes: cl } = props
  return (
    <div className={cl.toCenterContainer} >
      <div>
        {props.schools.map((school, i) => (
          <div className={cl.toCenter}>
            <span className={cl[i]}/>
            <Typography className={cl.type}>
              {school.school.N}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}

export default withStyles(styles)(ColorBubblesNamesComponent)