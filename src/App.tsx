import { Badge, Title } from "@tremor/react";
import "./App.css";
import ListOfUsers from "./components/listOfUsers";
import { useUsersActions } from "./hooks/useUsersActions";

function App() {
	const { users } = useUsersActions();
	return (
		<>
			<h1 className="text-5xl text-blue-400">Learning React Redux</h1>
			<section className="mt-20">
				<Title className="text-left">
					Users <Badge>{users.length}</Badge>
				</Title>
				<ListOfUsers users={users} />
			</section>
		</>
	);
}

export default App;
