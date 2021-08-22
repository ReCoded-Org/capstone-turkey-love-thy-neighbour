const initialState = {
  isSignInOpen: false,
  isSignUpOpen: false,
  isEditProfileOpen: false,
  isNeighborPopupOpen: false,
};

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "signIn":
      return { ...initialState, isSignInOpen: !state.isSignInOpen };

    case "signUp":
      return { ...initialState, isSignUpOpen: !state.isSignUpOpen };

    case "editProfile":
      return { ...initialState, isEditProfileOpen: !state.isEditProfileOpen };

    case "popupProfile":
      return {
        ...initialState,
        isNeighborPopupOpen: !state.isNeighborPopupOpen,
      };

    default:
      return state;
  }
};

export default popupReducer;
