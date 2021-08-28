import { auth, firestore } from "../firebaseConfig";

export const attachListenerToUserDoc = (uid) => {
  return (dispatch) => {
    return firestore
      .collection("users")
      .doc(uid)
      .onSnapshot((doc) => {
        dispatch({ type: "getUpdatedUser", payload: doc.data() });
      });
  };
};

export const listenForAuthChanges = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("wassup");
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
            return userReduxState;
          })
          .then((userReduxState) => {
            dispatch(attachListenerToUserDoc(userReduxState.authCred.uid)); // TODO: do i really need dispatch in here?
          });
      } else {
        dispatch({ type: "notSignedIn" }); // set the state to it's initial values
      }
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
      return { ...state, firestoreDoc: action.payload };

    default:
      return state;
  }
};

export default userReducer;
