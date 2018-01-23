import React from 'react';
import AutocompleteItem from './autocomplete-item';

class AutocompleteList extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="autocompleteList">
            {
                this.props.statesValue.map((item) => {
                    return (
                        <AutocompleteItem key={item} value={item} setInputValue={this.props.setInputValue} />
                    )
                })
            }    
            </div>
        )
    }
}

export default AutocompleteList;