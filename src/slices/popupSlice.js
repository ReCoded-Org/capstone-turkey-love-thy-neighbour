const initialState = {
  isSignInOpen: false,
  isSignUpOpen: false,
  isEditProfileOpen: false,
  isNeighborSummaryOpen: false,
};

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "signIn":
      return { ...initialState, isSignInOpen: !state.isSignInOpen };

    case "signUp":
      return { ...initialState, isSignUpOpen: !state.isSignUpOpen };

    case "editProfile":
      return { ...initialState, isEditProfileOpen: !state.isEditProfileOpen };

    case "neighborSummary":
      return {
        ...initialState,
        isNeighborSummaryOpen: !state.isNeighborSummaryOpen,
      };

    default:
      return state;
  }
};

export default popupReducer;
