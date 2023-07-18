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
      term: '',
      filterProps: 'all'
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
    if(term.length === 0) return this.buttonFilter(items);
    return this.buttonFilter(items.filter(item => item.name.indexOf(term) > -1));
  }

  onUpdateSearch = (term) => this.setState(() => ({term}));

  //-------------------------------------------------------------------------

  buttonFilter = (data) => {
    const {filterProps} = this.state;
    if(filterProps === 'rise') return data.filter(item => item.rise === true);
    if(filterProps === 'salary') return data.filter(item => item.salary > 1000);
    return data;
    
  }

  onFilterProps = (filterProps) => this.setState({filterProps});

  //-------------------------------------------------------------------------

  render(){
    const {data, term, filterProps} = this.state;
    const totalEmployees = this.state.data.length;
    const totalEmployeesIncrease = this.state.data.filter(item => item.increase).length;

    const visibleData = this.searchEmp(data, term);

    return (
      <div className="app">
        
          <AppInfo totalEmployees={totalEmployees} totalEmployeesIncrease={totalEmployeesIncrease}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter onFilterProps={this.onFilterProps} filterProps={filterProps}/>
          </div>
          
          <EmployeesList data={visibleData} 
                        deleteItem={this.deleteItem} 
                        onToggleProps={this.onToggleProps}/>

          <EmployeesAddForm addItem={this.addItem}/>
  
      </div>
    );
  }

}

export default App;
