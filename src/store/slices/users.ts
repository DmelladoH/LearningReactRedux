import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserWithId[] = [
	{
		id: "1",
		name: "pedro Gonzalez",
		email: "pedroG@gmail.com",
		github: "pedroG",
	},
	{
		id: "2",
		name: "Daniel Mellado",
		email: "daniel@gmail.com",
		github: "DmelladoH",
	},
];

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		delateUserById: (state, action: PayloadAction<UserID>) => {
			return state.filter((user) => user.id !== action.payload);
		},
	},
});

export default userSlice.reducer;
export const { delateUserById } = userSlice.actions;
