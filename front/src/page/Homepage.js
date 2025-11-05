import React from "react";
import { useParams } from "react-router-dom";

const Homepage = () => {
	let {id} = useParams();
	console.log(id);

	return (
		<div>
			
		</div>
	);
}

export default Homepage;

//링크에 /id값을 넣어주면 콘솔에 출력됨