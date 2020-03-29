import React from 'react'
import _ from 'lodash'
import { ThemeConsumer } from 'styled-components'

const cc = require('cryptocompare')


export const AppContext = React.createContext()

const MAX_FAVORITES = 10

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      confirmFavorites: this.confirmFavorites
    }
  }

  addCoin = key => {
    let favorites = [...this.state.favorites]
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key)
      this.setState({ favorites })
    }
  }

  removeCoin = key => {
    let favorites = [...this.state.favorites]
    this.setState({ favorites: _.pull(favorites, key) })
  }

  isInFavorites = key => _.includes(this.state.favorites, key)

  componentDidMount = () => {
    this.fetchCoins()
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data
    this.setState({ coinList })
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    })
    localStorage.setItem('cryptoReact', JSON.stringify({
      favorites: this.state.favorites
    }))
  }

  savedSettings () {
    let cryptoReactData = JSON.parse(localStorage.getItem('cryptoReact'))
    if (!cryptoReactData) {
      return { page: 'settings', firstVisit: true }
    }
    let { favorites } = cryptoReactData
    return { favorites }
  }

  setPage = page => this.setState({ page })

  render () {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}