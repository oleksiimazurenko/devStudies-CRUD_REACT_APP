import { Component } from "react";
import "./app-info.css";

class AppInfo extends Component {
    constructor(props){
        super(props);   
    }

    render(){
        const { totalEmployees, totalEmployeesIncrease } = this.props;
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников: {totalEmployees}</h2>
                <h2>Премию получат: {totalEmployeesIncrease}</h2>
            </div>
        )
    }
}

export default AppInfo;