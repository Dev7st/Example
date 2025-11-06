import { createContext, useState } from "react";
import HomePage from "./page/Homepage";

export const Context = createContext();

function App() {
	const [user,setUser] = useState({
		isLogin:false
	});

	const value = {
		state : {
			user:user
		},
		actions:{
			setUser:setUser
		}
	}

	return(
		<Context.Provider value={value}>
			<HomePage></HomePage>
		</Context.Provider>
	);
}

export default App;