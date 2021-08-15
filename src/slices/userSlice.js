import { auth, firestore } from "../firebaseConfig";

/* eslint-disable no-unused-vars */
export const listenForAuthChanges = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        firestore
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            const userReduxState = {
              isSignedIn: true,
              firestoreDoc: doc.data(),
              authCred: user,
            };
            dispatch({ type: "signedIn", payload: userReduxState });
          });
      } else {
        dispatch({ type: "notSignedIn" }); // set the state to it's initial values
      }
    });
  };
};

export const fetchUpdatedUser = (uid) => {
  return (dispatch) => {
    console.log("listener is attached!");
    return firestore
      .collection("users")
      .doc(uid)
      .onSnapshot((doc) => {
        console.log("something changed!");
        dispatch({ type: "getUpdatedUser", payload: doc.data() });
      });
  };
};

const initialState = {
  isSignedIn: false,
  firestoreDoc: null, // user prop is gonna have a user object if a user is signed in
  authCred: null, // whenever use signs in, we are gonna be setting the credential object to this prop
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "signedIn":
      return { ...action.payload };

    case "notSignedIn":
      return { ...initialState };

    case "getUpdatedUser":
      return { ...initialState, firestoreDoc: action.payload };

    default:
      return state;
  }
};

export default userReducer;
