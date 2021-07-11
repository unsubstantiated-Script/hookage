import "./App.css";
import { Container } from "reactstrap";
import UseStateComponent from "./hooks/UseStateComponent";
import UseEffectComponent from "./hooks/UseEffectComponent";
import UseMemoComponent from "./hooks/UseMemoComponent";

function App() {
	return (
		<>
			<Container>
				{" "}
				<h1>Hooks testing!</h1>
				<ol>
					<li className="my-3">
						<UseStateComponent />
					</li>
					<li className="my-3">
						<UseEffectComponent />
					</li>
					<li className="my-3">
						<UseMemoComponent />
					</li>
				</ol>
			</Container>
		</>
	);
}

export default App;
