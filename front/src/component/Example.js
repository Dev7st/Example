import React, { useState } from "react";

const Example = () => {
	const [aa,setAa] = useState("good");

	return(
		<div>
			{aa}
		</div>
	);
};

export default Example;