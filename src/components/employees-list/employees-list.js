import EmployeesListItem from "../employees-list-item/employees-list-item";
import { Component } from 'react';

import './employees-list.css';


class EmployeesList extends Component {
    
    constructor(props){
        super(props);
    }

    render(){

        const { data, deleteItem, onIncrease, onRise} = this.props;

        const elements = data.map(item =>  {
            const { id, ...itemProps } = item;

            return <EmployeesListItem key={id} 
                                    {...itemProps} 
                                    deleteItem = {() => deleteItem(id)}
                                    onIncrease={() => onIncrease(id)}
                                    onRise={() => onRise(id)}/>
        });
    
        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        )
    
    }
    
}

export default EmployeesList;