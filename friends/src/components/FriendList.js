import React, {useState, useEffect} from "react"; 
import axios from "axios";
import NewFriend from "./NewFriend";

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

	const getData = () => {
		// get full friendlist
		const authAxios = axiosWithAuth();
		authAxios
		.get(`${URL}/friends`)
		.then(res => {
			console.log(res.data);
			setFriendsAll(res.data);
		})
	}

	useEffect(() => {
		getData();
		sessionStorage.getItem("token") ? clg("+++ AUTHENT") : clg("--- UNVERIFIED")
	},[])	


	return (
		<div className="list">
			<NewFriend friendsAll={friendsAll} setFriendsAll={setFriendsAll}/>
			{friendsAll.map(e => (
				<div>{e.name}, {e.email}</div>
			))}
		</div>
	)

}
