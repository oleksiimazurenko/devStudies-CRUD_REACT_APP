import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {

    render(){
        const {onFilterProps, filterProps} = this.props;

        let classNamesAll = 'btn';
        let classNamesRise = 'btn';
        let classNamesSalary = 'btn';
        

        filterProps === 'all' ? classNamesAll += ' btn-light' :  classNamesAll += ' btn-outline-light';
        filterProps === 'rise' ? classNamesRise += ' btn-light' :  classNamesRise += ' btn-outline-light';
        filterProps === 'salary' ? classNamesSalary += ' btn-light' :  classNamesSalary += ' btn-outline-light';

        return (
            <div className="btn-group">
                <button type="button"
                        className={classNamesAll}
                        data-filter='all'
                        onClick={(e) => onFilterProps(e.target.getAttribute('data-filter'))}>
                        Все сотрудники
                </button>
                <button type="button"
                        className={classNamesRise}
                        data-filter='rise'
                        onClick={(e) => onFilterProps(e.target.getAttribute('data-filter'))}>
                        На повышение
                </button>
                <button type="button"
                        className={classNamesSalary}
                        data-filter='salary'
                        onClick={(e) => onFilterProps(e.target.getAttribute('data-filter'))}>
                        З/П больше 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;