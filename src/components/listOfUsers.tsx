import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";
import { useUsersActions } from "../hooks/useUsersActions";
import EditSVG from "../svg/editSVG";
import RemoveSVG from "../svg/removeSVG";

function ListOfUsers({ users }: { users: UserWithId[] }) {
	const { removeUser } = useUsersActions();

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableHeaderCell>Id</TableHeaderCell>
					<TableHeaderCell>Name</TableHeaderCell>
					<TableHeaderCell>Email</TableHeaderCell>
					<TableHeaderCell>Github</TableHeaderCell>
					<TableHeaderCell>Actions</TableHeaderCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{users.map(({ id, name, email, github }: UserWithId) => {
					return (
						<TableRow>
							<TableCell>{id}</TableCell>
							<TableCell className="flex gap-4">
								<img
									src={`https://unavatar.io/github/${github}`}
									alt={github}
									height={32}
									width={32}
									className="rounded-full"
								/>
								{name}
							</TableCell>
							<TableCell>{email}</TableCell>
							<TableCell>{github}</TableCell>
							<TableCell>
								<button type="button">
									<EditSVG />
								</button>
								<button type="button" onClick={() => removeUser(id)}>
									<RemoveSVG />
								</button>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}

export default ListOfUsers;
