const initialState = {
  _id: "6222e0d9409abe3fc466fed1",
  name: "Ameyaa",
  email: "ameya@123.com",
  phone: 1234567890,
  gender: "Male",
  password: "$2a$10$aQAntYBNdY9Hmd.5ZIYvieMvBqP0/yCfJSyGwn6Kj8R2K2CNqm4UG",
  createdAt: "2022-03-05T04:02:33.714Z",
  updatedAt: "2022-03-05T04:02:33.714Z",
  __v: 0,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return (state = action.value);
    default:
      return state;
  }
}
