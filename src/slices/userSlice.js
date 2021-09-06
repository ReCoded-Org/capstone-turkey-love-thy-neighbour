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
            dispatch(attachListenerToUserDoc(userReduxState.authCred.uid));
          });
      } else {
        dispatch({ type: "notSignedIn" });
      }
    });
  };
};

const initialState = {
  isSignedIn: false,
  firestoreDoc: null,
  authCred: null,
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
