import React from 'react';
import AutocompleteList from './autocomplete-list';

class Autocomplete extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            statesValue: '',
            isShown: false,
            inputColor: 'white',
            borderRadius: '3px'
        }
        this.processChange = this.processChange.bind(this);
        this.setInputValue = this.setInputValue.bind(this);
        this.closeList = this.closeList.bind(this);
        document.addEventListener('click', this.closeList)
    }
    
    closeList(e) {
        if (!e.target.getAttribute('autocomplete-item')) {
            this.setState({
                isShown: false,
                borderRadius: '3px'
            })
        }
    }

    processChange(e) {
        let currentValue = e.target.value;
        this.setState ({
            inputValue: currentValue,
            isShown: true,
            inputColor: 'white',
            borderRadius: '3px 3px 0 0'
        })
        let filteredStates = this.findStates(currentValue);
        this.setState ({
            statesValue: filteredStates
        })
    }

    findStates (value) {
        let statesArray = this.props.data;
        let firstChar = statesArray.filter((item) => {
            return item.toUpperCase().indexOf(value.toUpperCase()) === 0;
        })
        let innerChar = statesArray.filter((item) => {
            return item.toUpperCase().indexOf(value.toUpperCase()) > 0;
        })
        let newStatesArray = [...firstChar, ...innerChar];
        return(newStatesArray);
    }

    setInputValue (value) {
        this.setState({
            inputValue: value,
            isShown: false,
            inputColor: 'gold',
            borderRadius: '3px'
        })
    }

    renderAutocompleteList() {
        if (!this.state.isShown) {
            return null
        }
        if (this.state.statesValue.length === 0) {
            return (
                <div className="notFoundMessage">
                    Not Found
                </div>
            )
        }
        return(
            <AutocompleteList statesValue={this.state.statesValue} setInputValue={this.setInputValue}/>
        )
        
    }

    render () {
        return (
            <div className="inputContainer">
                <label htmlFor="inputTag">Enter country:</label>
                <div className="inputAutocomplete">
                    <input value={this.state.inputValue} style={ {backgroundColor: this.state.inputColor, borderRadius: this.state.borderRadius} } name="inputTag" type="text" onChange={this.processChange}/> 
                    {this.renderAutocompleteList()}                   
                </div>
            </div>
        )
    }
}

export default Autocomplete;