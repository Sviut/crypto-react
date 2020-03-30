import React from 'react'
import styled from 'styled-components'

import Page from '../Shared/Page'
import PriceGrid from './PriceGrid'
import CoinSpotlight from '../Dashboard/CoinSpotlight'

const ChartGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-gap: 25px;
  grid-template-columns: 1fr 3fr;
`

export default function () {
  return <Page name="dashboard">
    <PriceGrid />
    <ChartGrid>
      <CoinSpotlight />
    </ChartGrid>
  </Page>
}