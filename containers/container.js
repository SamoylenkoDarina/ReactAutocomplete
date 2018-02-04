import React, { Component } from 'react';
import { connect } from 'react-redux'

import Autocomplete from '../components/autocomplete';
import { getCountries } from '../store/actions'

class Container extends Component {
    componentDidMount () {
        this.props.getContainerCounries()
    }

    render () {
        return (
            <div>
                <Autocomplete data={this.props.countries}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { countries } = state
    return {
        countries
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getContainerCounries: () => dispatch(getCountries())
    }
}

const connectComponent = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connectComponent(Container)

export default connectedComponent
