export const ACTION_TYPES = {
  HIDE: 'header/HIDE',
  RESET: 'header/RESET',
};

const initialState = {
  hide: false,
};

export type HeaderState = Readonly<typeof initialState>;

// Reducer

export default (state: HeaderState = initialState, action): HeaderState => {
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
