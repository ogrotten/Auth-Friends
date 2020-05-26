import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from "react-router-dom";
// import Login from "./components/Login"

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";
import FriendList from "./components/FriendList";

function App() {
	return (
		<Router>
			<div className="App" >
				<p><Link to="/login">LOGIN</Link></p>
				<p><Link to="/friendlist">FriendList</Link></p>
				{/* <Login /> */}
				<Switch>
					<PrivateRoute path="/friendlist">
						<FriendList />
					</PrivateRoute>
					<Route path="/login" component={Login} />
					<Route render={() => { return <h1>404</h1> }} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;