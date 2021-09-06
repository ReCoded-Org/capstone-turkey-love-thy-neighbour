import { firestore } from "../firebaseConfig";

import PPMaleSVG from "../images/Profile/PPMaleSVG.svg";
import PPFemaleSVG from "../images/Profile/PPFemaleSVG.svg";
import PPGenderless from "../images/Profile/PPGenderless.png";

export function removeOneProp(object, propToBeRemoved) {
  const copyObj = { ...object };
  delete copyObj[propToBeRemoved];
  return copyObj;
}

export function setUserDocument(docTitle, docData) {
  return firestore.collection("users").doc(docTitle).set(docData);
}

export function createInterestString(interests) {
  let interestsString = "";
  interests.forEach((interestObj, index, array) => {
    if (index === array.length - 1) {
      interestsString += `${interestObj.content}.`;
      return;
    }
    interestsString += `${interestObj.content} | `;
  });
  return interestsString;
}

export function getDefaultGenderImage(gender) {
  switch (gender) {
    case "Prefer not to say":
      return PPGenderless;
    case "Male":
      return PPMaleSVG;
    case "Female":
      return PPFemaleSVG;
    default:
      return undefined;
  }
}

export function extractFullNameFromNotificationMessage(feedbackMessage) {
  const words = feedbackMessage.split(" ");

  const lastWordLetters = words[words.length - 1].split("");
  lastWordLetters.splice(lastWordLetters.length - 1, 1);
  const newLastWord = lastWordLetters.join("");

  const fullNameWords = words.slice(5);
  fullNameWords.splice([fullNameWords.length - 1], 1, newLastWord);

  const fullName = fullNameWords.join(" ");

  return fullName;
}

export function getTurkishEducationStatus(ENEducationStatus) {
  let turkishVersion;

  switch (ENEducationStatus) {
    case "Primary School Grad":
      turkishVersion = "İlk okul mezunu";
      break;
    case "High School Grad":
      turkishVersion = "Lise Mezunu";
      break;
    case "University Grad":
      turkishVersion = "Üniversite Mezunu";
      break;
    case "Higher Education":
      turkishVersion = "Yüksek Ögretim";
      break;
    default:
  }

  return turkishVersion;
}
