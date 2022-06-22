import React, { useState, useEffect } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

const App = () => {

    const [robots, setRobots] = useState([]);
    const [searchFields, setSearchFields] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);

    const onSearchChange = (event) => {
        setSearchFields(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.username.toLowerCase().includes(searchFields.toLowerCase());
    });

    if (!robots.length) {
        return <h1>LOADING....</h1>
    }
    else {
        return (
            <div className="tc robo-domain">
                <div className="navbar">
                    <h1 id='title'>Humanoids</h1>
                    <SearchBox searchChange={onSearchChange} />
                </div>
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;