import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const customConnect = (mapFn) => {
  return (OurComponent) => {
    class CustomConnect extends Component {
      constructor(props) {
        super(props)
        this.state = {
          childComponentProps: {}
        }
      }

      componentWillMount() {
        const { store } = this.context;

        this.unsubscribe = store.subscribe(() => {
          const state = store.getState()
          const childComponentProps = mapFn(state)

          this.setState({ childComponentProps })
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        return <OurComponent {...this.props} {...this.state.childComponentProps} />
      }
    }

    CustomConnect.contextTypes = {
      store: PropTypes.object
    }

    return CustomConnect
  }
}