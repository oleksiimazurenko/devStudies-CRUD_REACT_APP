import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: '',
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearForm = () => {
        this.setState({
            name: '',
            salary: '',
        });
    };

    render(){

        const { name, salary } = this.state;
        const { addItem } = this.props;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => addItem(e, name, salary, this.clearForm)}>
                    <input type="text"
                        className="form-control new-post-label"
                        name='name'
                        value={name} // Всегда нужно делать управляемые компоненты, двлйное связывание
                        placeholder="Как его зовут?" 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        name='salary'
                        value={salary} // Всегда нужно делать управляемые компоненты, двлйное связывание
                        placeholder="З/П в $?"
                        onChange={this.onValueChange} />
    
                    <button type="submit" className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }

}

export default EmployeesAddForm;