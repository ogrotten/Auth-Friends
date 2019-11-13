import React, {useState, useEffect} from "react"; 
import axios from "axios";
// import Friend from "./Friend";

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
export default function FriendList () {
	const [friendsAll, setFriendsAll] = useState([]);

	useEffect(() => {
		getData();
		sessionStorage.getItem("token") ? clg("+++ AUTHENT") : clg("--- UNVERIFIED")
	})

	const getData = () => {
		// get full friendlist
		const authAxios = axiosWithAuth();
		authAxios
		.get(`${URL}/friends`)
		.then(res => {
			clg(res.data)
			setFriendsAll(res.data);
		})
	}


	return (
		<div>
			{friendsAll.map(e => (
				<div>{e}</div>
			))}
		</div>
	)

}
