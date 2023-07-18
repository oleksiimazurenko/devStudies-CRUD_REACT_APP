import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            salary: this.props.salary
        }
    }

    onChangeSalary = (e) => {
        const sliceValue = e.target.value.slice(0, -1);
        const {id, onChangeSalary} = this.props;
        this.setState({salary: sliceValue});
        onChangeSalary(id, sliceValue);
    }

    render(){
        const { name, increase, rise, deleteItem, onToggleProps } = this.props;
        const { salary } = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if(increase) classNames += ' increase';
        if(rise) classNames += ' like';

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProps} data-toggle='rise'>{name}</span>
                <input type="text" 
                        className="list-group-item-input" 
                        value={salary + '$'} 
                        onChange={this.onChangeSalary} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProps}
                        data-toggle='increase'>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={deleteItem}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        ) 
    }
}

export default EmployeesListItem;