import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchFields: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchFields: event.target.value })
    }

    render() {
        const { robots, searchFields } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchFields.toLowerCase());
        });
        if (!robots.length) {
            return <h1>LOADING....</h1>
        }
        else {
            return (
                <div className="tc robo-domain">
                    <h1>Humanoids</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;