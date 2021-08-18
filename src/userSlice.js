/* eslint-disable no-unused-vars */
export const test = () => {
  return { type: "test" };
};

const initialState = {
  isSignedIn: false,
  firestoreDoc: null, // user prop is gonna have a user object if a user is signed in
  authCred: null, // whenever use signs in, we are gonna be setting the credential object to this prop
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "test":
      return "this is a test";
    default:
      return state;
  }
};

export default userReducer;
