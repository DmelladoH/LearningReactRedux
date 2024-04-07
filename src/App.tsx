import { useSelector } from "react-redux";
import "./App.css";
import ListOfUsers from "./components/listOfUsers";

function App() {
	const users = useSelector((state) => state.users);
	return (
		<>
			<h1 className="text-5xl text-blue-400">Learning React Redux</h1>
			<section className="mt-20">
				<ListOfUsers users={users} />
			</section>
		</>
	);
}

export default App;
