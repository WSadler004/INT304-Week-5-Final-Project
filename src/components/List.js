import React from 'react';
import { Link } from 'react-router-dom';


function List(props) {

    return (
        <div className="List">
            <ul>
                <Link to="/"><button>Home</button></Link>                
                <Link to="/Add"><button>Add New</button></Link>
            </ul>
            <div className="employee-list">
                <h1>Employee List</h1>
                <ul>
                    {props.employees.map((employee) => (
                        <lo key={employee.EmployeeId}>
                            {}
                            <Link to={`/employees/${employee.EmployeeId}`}>
                                {employee.name}
                            </Link>
                        </lo>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default List;