import React from 'react';

class AutocompleteItem extends React.Component {
    constructor () {
        super();
    }

    processClick() {
        this.props.setInputValue(this.props.value)
    }

    render () {
        return (
            <div>
                <li autocomplete-item='true' onClick={this.processClick.bind(this)}>{this.props.value}</li>
            </div>
        )
    }
}

export default AutocompleteItem;