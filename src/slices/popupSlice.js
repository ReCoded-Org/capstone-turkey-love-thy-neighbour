const initialState = {
  isSignInOpen: false,
  isSignUpOpen: false,
  isEditProfileOpen: false,
};

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "signIn":
      return { ...initialState, isSignInOpen: !state.isSignInOpen };

    case "signUp":
      return { ...initialState, isSignUpOpen: !state.isSignUpOpen };

    case "editProfile":
      return { ...initialState, isEditProfileOpen: !state.isEditProfileOpen };

    default:
      return state;
  }
};

export default popupReducer;
