import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Details(props) {

    const { id } = useParams();

    const employee = props.employees.find((employee) => employee.EmployeeId === parseInt(id));
    const { EmployeeId, name, title, department, file } = employee || {}; 

    return (
        <div className="Details">
            <ul>
                <Link to="/"><button>Home</button></Link>                
                <Link to="/Add"><button>Add New</button></Link>              
                <Link to="/List"><button>View List</button></Link>
            </ul>
        <div className="employee-detail">
            <table>
                <tbody>
                    <tr>
                        <td><label>Employee ID: </label></td>
                        <td>{EmployeeId}</td>
                    </tr>
                    <tr>
                        <td><label>Name: </label></td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td><label>Title: </label></td>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <td><label>Dept: </label></td>
                        <td>{department}</td>
                        </tr>
                        <tr>
                            <td><label>Photo:</label></td>
                            <td><img src={file} alt="Not Found" width="300" /></td>
                        </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Details;
