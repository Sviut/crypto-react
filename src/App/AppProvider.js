import React from 'react'

export const AppContext = React.createContext()

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    }
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    })
    localStorage.setItem('cryptoReact', JSON.stringify({
      test: 'hello'
    }))
  }

  savedSettings () {
    let cryptoReactData = JSON.parse(localStorage.getItem('cryptoReact'))
    if (!cryptoReactData) {
      return { page: 'settings', firstVisit: true }
    }
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