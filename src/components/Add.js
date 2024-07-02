import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Add(props) {
    const [file, setFile] = useState('');
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [department, setDept] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const employee = {
            EmployeeId: Math.floor(Math.random() * 10000),
            name,
            title,
            department,
            file,
        };
        props.onSubmit(employee);
        console.log(JSON.stringify(employee));
        setName('');
        setTitle('');
        setDept('');
        setFile('');
    };
    return (
        <div className="Add">
            <ul>
                <Link to="/"><button>Home</button></Link>
                <Link to="/List"><button>View List</button></Link>
            </ul>
            <form className="employee-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input
                        type="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="department">Dept: </label>
                    <input
                        type="dept"
                        id="dept"
                        value={department}
                        onChange={(e) => setDept(e.target.value)} />
                </div>
                    <div className="image">
                        <h2>Add Image:</h2>
                    <input type="file"
                        onChange={handleChange} />
                        <img src={file} alt="Not Found" />
                    </div>
                    <button type="submit">Submit</button>
            </form>
          </div>
    );
}

export default Add;