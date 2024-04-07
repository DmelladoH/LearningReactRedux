import { delateUserById } from "../store/slices/users";
import { useAppDispatch, useAppSelector } from "./useStore";

export function useUsersActions() {
	const dispatch = useAppDispatch();
	const users = useAppSelector((state) => state.users);

	const removeUser = (id: UserID) => {
		dispatch(delateUserById(id));
	};

	return { users, removeUser };
}
