import React, { useEffect, useState } from "react";

const Example = () => {
	let [clicked,setClicked] = useState(false);

	useEffect(() => {
		console.log("Hello");

		return () =>{
			console.log("Before");
		}
	},[clicked]);

	const handleClick = () => {
		setClicked(!clicked);
	}

	return (
		<>
			<p>클릭여부 : {clicked?"true":"false"}</p>
			<button onClick={handleClick}>클릭</button>
		</>
	);
};

export default Example;