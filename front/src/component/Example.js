import React, { useState } from "react";

const Example = () => {
	let [user,setUser] = useState({
		nickname: "안재홍",
		age: 30
	});

	return (
		<>
			<p>{user.nickname}</p>
			<p>{user.age}</p>
		</>
	);
};

export default Example;