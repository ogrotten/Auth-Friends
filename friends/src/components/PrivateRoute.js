import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuthent = () => {
	return sessionStorage.getItem("token") ? true : false;
}

export default function PrivateRoute({ children, ...rest }) {
	const redir = <Redirect /* to={{
		pathname: "/login",
		state: { from: location }
	}}  *//>;

	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuthent() ? (children) : (redir)
			}
		/>
	)
}