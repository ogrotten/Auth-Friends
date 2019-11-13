import React, { useState, useEffect } from "react";
import axios from "axios";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const URL = "http://localhost:5000/api"

const axiosWithAuth = () => {
	return axios.create({
		headers: {
			authorization: sessionStorage.getItem("token")
		}
	})
}

export default function NewFriend(props) {
	const [newUser, setNewUser] = useState({ name: "", email: "", age:"" })

	const handleChange = e => {
		// clg(newUser);
		setNewUser({ ...newUser, [e.target.name]: e.target.value })
	}

	const addAction = e => {
		e.preventDefault();
		const authAxios = axiosWithAuth();
		authAxios
			.post(`${URL}/friends`, newUser)
			.then(res => {
				clg(res.data)
				props.setFriendsAll(res.data);
			})
			.catch(err => clg(err))
	}

	return (
		<>
			<form onSubmit={addAction}>
				<input type="text" name="name" value={newUser.name} onChange={handleChange} placeholder="name" />
				<input type="text" name="age" value={newUser.age} onChange={handleChange} placeholder="age" />
				<input type="text" name="email" value={newUser.email} onChange={handleChange} placeholder="email" />
				<button>Add</button>
			</form>
			<hr />
		</>)
}