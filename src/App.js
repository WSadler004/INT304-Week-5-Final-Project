import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Home from './components/Home';
import Details from './components/Details';
import List from './components/List';
import Add from './components/Add';
function App() {

    const [employees, setEmployees] = useState([]);

    const addEmployee = (employee) => {
        setEmployees([...employees, employee]);
    };



    return (
        <Router>
            <section>
                <div className="style">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Home />
                            </>
                        } />
                        <Route path="/Add" element={
                            <>
                                <Add onSubmit={addEmployee} />
                            </>
                        } />
                        < Route path="/List" element={
                            <>
                                <List employees={employees} />
                            </>
                        } />
                        <Route path="/employees/:id" element={<Details employees={employees} />} />
                    </Routes>
                </div>
            </section>
        </Router>
    );
}

export default App;
