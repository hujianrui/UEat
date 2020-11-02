import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import Menu from './Menu';

class App extends Component {
	render() {
		const getMenu = props => {
			let name = props.match.params.name;
			return <Menu name={name} />;
		}
		return (
			<Switch>
				<Route exact path='/' render={()=> <RestaurantList/>}></Route>
				<Route exact path='/:name' render={getMenu}></Route>
				<Redirect to='/' />
			</Switch>
		);
	}
}

export default App;
