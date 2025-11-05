import { useState } from 'react';

function App() {
	const [people,setPeople] = useState(["마리오","짱구","철수","루이지","유리"]);

	const listItem = people.map((person,index) => {
		return (
			<li key={index}>{person}</li>
		)
	});

  return (
	<div>
		{listItem}
	</div>
  );
}

export default App;