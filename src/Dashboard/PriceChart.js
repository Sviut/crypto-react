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
      {({ historical }) =>
        <Tile>
          {historical ? 
           <ReactHighcharts config={highchartsconfig(historical)} />
           : <div> Loading Historical Data </div>
          }
        </Tile>
      }
    </AppContext.Consumer>
  )
}