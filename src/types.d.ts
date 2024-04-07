interface User {
	name: string;
	email: string;
	github: string;
}

type UserID = string;
interface UserWithId extends User {
	id: UserID;
}
