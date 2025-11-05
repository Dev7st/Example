import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		alert("로그인 페이지로 이동합니다.");
		navigate("/login");
	}

	return (
		<div>
			<button onClick={handleClick}>Go Login</button>
		</div>
	);
}

export default Homepage;