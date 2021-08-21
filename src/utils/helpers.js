import { firestore } from "../firebaseConfig";

export function removeOneProp(object, propToBeRemoved) {
  // propToBeRemoved is gonna be a string
  const copyObj = { ...object };
  delete copyObj[propToBeRemoved];
  return copyObj;
}

export function setUserDocument(docTitle, docData) {
  firestore.collection("users").doc(docTitle).set(docData);
}
