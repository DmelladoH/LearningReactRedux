interface User {
	name: string;
	email: string;
	github: string;
}

interface UserWithId extends User {
	id: string;
}
