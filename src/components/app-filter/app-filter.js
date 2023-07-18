import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {

    render(){
        const {onFilterSelect, filter} = this.props;

        const buttonsData = [
            {name: 'all', placeholder: 'Все сотрудники'},
            {name: 'rise', placeholder: 'На повышение'},
            {name: 'salary', placeholder: 'З/П больше 1000$'}
        ] 

        const buttons = buttonsData.map(({name, placeholder}) => {
            const clazz = name === filter ? 'btn-light' : 'btn-outline-light';
            return (
                <button type="button"
                        className={`btn ${clazz}`}
                        data-filter={name}
                        key={name}
                        onClick={(e) => onFilterSelect(e.target.getAttribute('data-filter'))}>
                        {placeholder}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default AppFilter;