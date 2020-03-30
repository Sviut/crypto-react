import React from 'react'
import ReactHighcharts from 'react-highcharts'

import { Tile } from '../Shared/Tile'
import { AppContext } from '../App/AppProvider'
import highchartsconfig from './HighchartsConfig'
import HighchartsTheme from './HighchartsTheme'

ReactHighcharts.Highcharts.setOptions(HighchartsTheme)

export default function () {
  return (
    <AppContext.Consumer>
      {({ }) =>
        <Tile>
          <ReactHighcharts config={highchartsconfig()} />
        </Tile>
      }
    </AppContext.Consumer>
  )
}