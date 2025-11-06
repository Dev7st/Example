import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	const [aa,setAa] = useState([
		{
			userId: 0,
			id: 0,
			title:"",
			body:""
		}
	]);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((resp) => {
			setAa(resp.data);
		});
	},[])

	const postList = aa.map((data) => {
		return <p key={data.id}>{data.title}</p>
	})

	return(
		<>
			{postList}
		</>
	);
}

export default App;