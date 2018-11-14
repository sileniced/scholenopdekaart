import React, { Component } from 'react'
import { connect } from 'react-redux'
import TevredenheidTable from './TevredenheidTable'
import { checkPoindAvailability } from '../../../utilities'

class TevredenheidTableContainer extends Component {


  render() {

    const { available, unavailable } = checkPoindAvailability(this.props.selectedSchools, 'tevredenheid')


    const getTevredenheid = school => {
      if (school.tevredenheid.rapport.versie1.datasetLeerlingTevredenheidTrend) return school.tevredenheid.rapport.versie1.datasetLeerlingTevredenheidTrend.rij[2]
      if (school.tevredenheid.rapport.versie1.datasetLeerlingTevredenheid) return school.tevredenheid.rapport.versie1.datasetLeerlingTevredenheid.rij[0]
      return 4
    }


    const schools = available.map(school => ({ tevredenheid: getTevredenheid(school), name: school.school.N }))

    return <TevredenheidTable schools={schools}/>
  }
}

const mapStateToProps = ({ selectedSchools }) => ({ selectedSchools })

export default connect(mapStateToProps)(TevredenheidTableContainer)