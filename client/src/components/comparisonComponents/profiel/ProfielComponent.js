import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import ComparisonHeaderComponent from '../ComparisonHeaderComponent'
import { comparisonColors } from '../../../theme'
import Button from '@material-ui/core/Button/Button'
import Typography from '@material-ui/core/Typography/Typography'


const correctColor = num => ({
  backgroundColor: comparisonColors[num][500],
  margin: 10,
  width: 150,
  maxWidth: 175,
  height: 60,
  textTransform: 'none',
})

const stupidBorders = num => ({
  border: `1px solid ${comparisonColors[num][500]}`,
  borderRadius: 10,
  margin: 3
})

const styles = theme => ({
  0: correctColor(0),
  1: correctColor(1),
  2: correctColor(2),
  3: correctColor(3),
  4: correctColor(4),
  stupidBorder0: stupidBorders(0),
  stupidBorder1: stupidBorders(1),
  stupidBorder2: stupidBorders(2),
  stupidBorder3: stupidBorders(3),
  stupidBorder4: stupidBorders(4),
  buttonDiv: {
    width: 400,
    display: 'flex',
    flexWrap: 'wrap',
  },
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
    alignItems: 'center',
  },
})

const Title = props => {
  const { classes: cl, profiel, sociale } = props
  return (
    <div>
      <ComparisonHeaderComponent name={'profiel'}/>
      {/*{profiel.map(school => school.map(kernwaarde => console.log(kernwaarde.kernwoord)))}*/}
      {profiel.map((school, i) => (
        <div className={cl[`stupidBorder${i}`]}>

          <div className={cl.buttonDiv}>
            <div className={cl.toCenterContainer}>
              <div className={cl.toColumn}>
                <Typography><h2 className={cl.header}>Missie en Visie</h2></Typography>
                <Typography dangerouslySetInnerHTML={{__html: sociale[i].datasetVisie.rij.visie.slice(0, 300) + '... <b>Lees meer</b>'}} />
              </div>
            </div>
          </div>
          <div className={cl.buttonDiv}>
            <div className={cl.toCenterContainer}>
              <div className={cl.toColumn}>
                <Typography><h2 className={cl.header}>Algemene kernwaarden</h2></Typography>
                <Typography>De school omschrijft zich met de woorden:</Typography>
              </div>
            </div>
            {school.map((kernwaarde, ii) => ii < 4 && (
              <Button disableRipple className={cl[i]}>{kernwaarde.kernwoord}</Button>
            ))}
          </div>
          <div className={cl.buttonDiv}>
            <div className={cl.toCenterContainer}>
              <div className={cl.toColumn}>
                <Typography><h2 className={cl.header}>Sociale kernwaarden</h2></Typography>
                <Typography>Deze sociale vaardigheden wil de school de kinderen meegeven:</Typography>
              </div>
            </div>
            {sociale[i].datasetKernwaarden.rij.map((kernwaarde, ii) => ii < 4 && (
              <Button disableRipple className={cl[i]}>{kernwaarde.kernwaarde}</Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default withStyles(styles)(Title)