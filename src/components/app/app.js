import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { Component } from 'react';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: [
        {name: 'Alex', salary: 3000, increase: true, rise: true, id: 1},
        {name: 'Ilya', salary: 15000, increase: false, rise: true, id: 2},
        {name: 'Olha', salary: 5500, increase: false, rise: false, id: 3}
      ],
      idEmployees: 4,
    }
  }



  deleteItem = (id) => {
    this.setState(({data}) => ({
        data: data.filter(item => item.id !== id)
    }));
  }

  addItem = (e, name, salary, clearForm) => {
    e.preventDefault();
    
    this.setState(({data, idEmployees}) => ({
      data: [...data, {name, salary, increase: false, id: idEmployees}],
      idEmployees: idEmployees + 1
    }));
    clearForm();
  }




  // onIncrease = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map(item => item.id === id ? { ...item, increase: !item.increase } : item)
  //   }));
  // };

  // onRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map(item => item.id === id ? { ...item, rise: !item.rise } : item)
  //   }));
  // }

  onToggleProps = (id, props) => {
    this.setState(({ data }) => ({
      data: data.map(item => item.id === id ? { ...item, [props]: !item[props] } : item)
    }));
  }




  render(){
    const totalEmployees = this.state.data.length;
    const totalEmployeesIncrease = this.state.data.filter(item => item.increase).length;

    const { data } = this.state;

    return (
      <div className="app">
        
          <AppInfo totalEmployees={totalEmployees} totalEmployeesIncrease={totalEmployeesIncrease}/>
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList data={ data } 
                        deleteItem={ this.deleteItem } 
                        onIncrease={ this.onIncrease } 
                        onRise={ this.onRise }/>

          <EmployeesAddForm addItem={ this.addItem }/>
  
      </div>
    );
  }

}

export default App;
