import React, { useContext } from "react";
import { Context } from "../App";

const Homepage = () => {
	const {state,actions} = useContext(Context);

	function handleClick() {
		actions.setUser({
			...state.user,
			isLogin:true
		})
	}

	return (
		<div>
			<p>{state.user.isLogin?"로그인중":"로그인하러가기"}</p>
			<button onClick={handleClick}>로그인</button>
		</div>
	);
}

export default Homepage;

/* 새터함수 = 바꾼다, 작동하기 위한 장치정도로 생각하면 이해하기 쉬움
예를들어 user의 key가 name, isLogin이 있다고 할 때
...state.user을 통해 name, isLogin을 불러오고, false > true로 바꾼다.
이 때 name은 유지된다. why? spread를 사용했기 때문에 원본에 영향x */