import React from "react";
import { useSearchParams } from "react-router-dom";

const Homepage = () => {
	const [searchParams,setSearchParams] = useSearchParams();
	console.log(searchParams.get("uid"));

	return (
		<div>
			
		</div>
	);
}

export default Homepage;

//링크에 /?uid=값을 넣어주면 콘솔에 출력됨