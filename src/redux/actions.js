export const setEyeVelocity = eyeVelocity => ({
  type: "SET_EYE_VELOCITY",
  data: eyeVelocity
});

const SidiousSkullState = {
  eyeVelocity: 0
};

export const SidiousSkullReducer = (state = SidiousSkullState, action) => {
  switch (action.type) {
    case "SET_EYE_VELOCITY":
      return { ...state, eyeVelocity: action.data.eyeVelocity };
    default:
      return state;
  }
};
