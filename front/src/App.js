import styled from "styled-components";

const Box = styled.div`
	width:100px;
	height:100px;
	background-color:green;
	border-radius:8px;
	
	p{
	color:red;
	}
`

function App() {

	return(
		<>
			<Box>
				<p>asdf</p>
			</Box>
		</>
	);
}

export default App;