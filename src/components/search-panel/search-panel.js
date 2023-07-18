import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {

    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (value) => {
        this.setState({
            term: value
        })
        this.props.onUpdateSearch(value);
    }

    render(){
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    value={this.state.term}
                    onChange={(e) => this.onUpdateSearch(e.target.value)}/>
        )
    }
}

export default SearchPanel;