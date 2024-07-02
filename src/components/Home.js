import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <ul>
                <Link to="/"><button>Home</button></Link>
                <Link to="/Add"><button>Add New</button></Link>                
                <Link to="/List"><button>View List</button></Link>
            </ul>
            <h1>WELCOME TO THE DEATH STAR EMPLOYEE DATABASE</h1>
        </div>
    );
}

export default Home;