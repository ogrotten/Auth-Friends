import React, {useState, useEffect} from "react"; 
import axios from "axios";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const URL = "http://localhost:5000/api/"

const axiosWithAuth = () => {
	return axios.create({
		headers: {
			authorization: sessionStorage.getItem("token")
		}
	})
}
export default function FriendList () {
	const [friendsAll, setFriendsAll] = useState([]);

	useEffect(() => {
		getData();
		sessionStorage.getItem("token") ? clg("+++ AUTHENT") : clg("--- UNVERIFIED")
	})

	const getData = () => {
		const authAxios = axiosWithAuth();
		authAxios
		.get(URL)
		.then(res => {
			clg(res.data)
			setFriendsAll(res.data);
		})
	}

	
}
