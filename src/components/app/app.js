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
        {name: 'Alex', salary: 500, increase: true, rise: true, id: 1},
        {name: 'Ilya', salary: 15000, increase: false, rise: true, id: 2},
        {name: 'Olha', salary: 5500, increase: false, rise: false, id: 3},
        {name: 'Dany', salary: 800, increase: true, rise: false, id: 4},
        {name: 'Max', salary: 1500, increase: false, rise: true, id: 5},
      ],
      idEmployees: 6,
      term: '',
      filter: 'all'
    }
  }

  //-------------------------------------------------------------------------

  deleteItem = (id) => {
    this.setState(({data}) => ({
        data: data.filter(item => item.id !== id)
    }));
  }

  addItem = (e, name, salary, clearForm) => {
    e.preventDefault();

    if(name.length > 2 && salary.length > 2){
      this.setState(({data, idEmployees}) => ({
        data: [...data, {name, salary, increase: false, id: idEmployees}],
        idEmployees: idEmployees + 1
      }));
    }
    clearForm();
  }

  //-------------------------------------------------------------------------

  onToggleProps = (id, props) => {
    this.setState(({ data }) => ({
      data: data.map(item => item.id === id ? { ...item, [props]: !item[props] } : item)
    }));
  }

  //-------------------------------------------------------------------------

  searchEmp = (items, term) => {
    if(term.length === 0) return items;
    return items.filter(item => item.name.indexOf(term) > -1);
  }

  onUpdateSearch = (term) => this.setState(() => ({term}));

  //-------------------------------------------------------------------------

  filterPost = (data, filter) => {
    switch(filter){
      case 'rise': 
        return data.filter(item => item.rise === true);
      case 'salary': 
        return data.filter(item => item.salary > 1000);
      default:
        return data;
    }
  }

  onFilterSelect = (filter) => this.setState({filter});

  //-------------------------------------------------------------------------

  onChangeSalary = (id, salary) => {
    this.setState(({data}) => ({
      data: data.filter(item => item.id === id ? item.salary = salary : item)
    }))
  }

  //-------------------------------------------------------------------------

  render(){
    const {data, term, filter} = this.state;
    const totalEmployees = this.state.data.length;
    const totalEmployeesIncrease = this.state.data.filter(item => item.increase).length;

    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        
          <AppInfo totalEmployees={totalEmployees} totalEmployeesIncrease={totalEmployeesIncrease}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter onFilterSelect={this.onFilterSelect} filter={filter}/>
          </div>
          
          <EmployeesList data={visibleData} 
                        deleteItem={this.deleteItem} 
                        onToggleProps={this.onToggleProps}
                        onChangeSalary={this.onChangeSalary}/>

          <EmployeesAddForm addItem={this.addItem}/>
  
      </div>
    );
  }

}

export default App;
