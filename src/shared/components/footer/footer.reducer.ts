export const ACTION_TYPES = {
  HIDE: 'footer/HIDE',
  RESET: 'footer/RESET',
};

const initialState = {
  hide: false,
};

export type FooterState = Readonly<typeof initialState>;

// Reducer

export default (state: FooterState = initialState, action): FooterState => {
  switch (action.type) {
    case ACTION_TYPES.HIDE:
      return {
        ...state,
        hide: true,
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

// Actions

export const hide = () => ({
  type: ACTION_TYPES.HIDE,
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
