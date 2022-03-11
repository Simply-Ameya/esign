const initialState = {
  email: "ameya@123.com",
  fileId: "6222eae4409abe3fc466fee6",
  signers: [],
  title: "nov",
  userId: "6222e0d9409abe3fc466fed1",
  _id: "6222ec43409abe3fc466feee",
  __v: 0,
};

export default function documentUpload(state = initialState, action) {
  switch (action.type) {
    case "UPLOAD":
      return (state = action.value);
    default:
      return state;
  }
}
