import React, { useState, useEffect } from "react";
import axios from "axios";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const URL = "http://localhost:5000/api/"

export default function Login() {
	const [credentials, setCredentials] = useState({ username: "", password: "" });
	const [isLoggedIn, setIsLoggedIn] = useState({isLoggedIn: false});

	// console.log(isLoggedIn);
	
	// control form fields
	const handleChange = e => {
		// clg(credentials);
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}

	// form submit
	const loginAction = e => {
		e.preventDefault();
		axios
			.post(`${URL}login`, credentials)
			.then(res => {
				// clg(res.data)
				sessionStorage.setItem("token", res.data.payload)
				setIsLoggedIn(true);
			})
	}

	// 
	useEffect(() => {
		if (sessionStorage.getItem("token")) {
			setIsLoggedIn({ ...isLoggedIn, isLoggedIn: true });
		} else {
			setIsLoggedIn({ ...isLoggedIn, isLoggedIn: false });
		}
	}, [])

	const pass = "i<3Lambd4"

	return (
		<>
			<p>
				{isLoggedIn ? "Logged In" : "Do a logging in plz"}
			</p>
			<form onSubmit={loginAction}>
				<p>Lambda School ::  {pass}</p>
				<input type="text" name="username" value={credentials.username} onChange={handleChange} />
				<input type="password" name="password" value={credentials.password} onChange={handleChange} />
				<button>login</button>
			</form>
		</>
	)
}