import React, { useState, useEffect } from "react";
import axios from "axios";

function clg(...x) {
    for (let exes of x) console.log(exes);
}

export default function Login() {
	const [credentials, setCredentials] = useState({ username: "", password: "" });
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// console.log(setCredentials, setIsLoggedIn);
	// console.log(credentials, isLoggedIn);

	// control form fields
	const handleChange = e => {
		clg(credentials);
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}

	const loginAction = e => {

	}

	// useEffect(() => {
	// 	if (sessionStorage.getItem("token")) {
	// 		setIsLoggedIn({ ...isLoggedIn, isLoggedIn: true });
	// 	} else {
	// 		setIsLoggedIn({ ...isLoggedIn, isLoggedIn: false });
	// 	}
	// }, [isLoggedIn])

	return (
		<>
			<p>
				{isLoggedIn ? "Logged In" : "Do a logging in plz"}
			</p>
			<form onSubmit={loginAction}>
				<input type="text" name="username" value={credentials.username} onChange={handleChange} />
				<input type="password" name="password" value={credentials.password} onChange={handleChange} />
				<button>login</button>
			</form>
		</>
	)
}