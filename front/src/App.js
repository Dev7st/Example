import { useState } from 'react';

function App() {
	const [people,setPeople] = useState([
		{
			id:0,
			name: "크레올라",
			profession: "의사"
		},
		{
			id:1,
			name: "마리오",
			profession: "개발자"
		},
		{
			id:2,
			name: "루이지",
			profession: "개발자"
		}
	]);

	const data = people.filter((person) => {
		return person.profession === "개발자"
	})

	console.log(data);

  return (
	<div>

	</div>
  );
}

export default App;