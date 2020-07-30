import React from 'react';
// import { robots } from './Robots.js';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=> this.setState({ robots: users}));
		
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value});
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	}
	

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robots => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			return !robots.length ?
			<h1 class='tc'>Loading</h1> :
		 (
			<div className="tc">
			<h1 className='f2'>RoboFriends</h1>
			<SearchBox className='atmebro' searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundary>
					<CardList robots={filteredRobots} />
				</ErrorBoundary>
			</Scroll>
		</div>
		);
	}
}
export default App;