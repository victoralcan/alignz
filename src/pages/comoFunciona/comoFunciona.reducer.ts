import IFormulario, { IPessoa } from 'shared/model/formulario.model';

export const ACTION_TYPES = {
  SET_MOTIVACAO: 'comoFunciona/SET_MOTIVACAO',
  SET_USOU_APARELHO: 'comoFunciona/SET_USOU_APARELHO',
  SET_ESPACAMENTO: 'comoFunciona/SET_ESPACAMENTO',
  SET_DESALINHAMENTO: 'comoFunciona/SET_DESALINHAMENTO',
  SET_MORDIDA: 'comoFunciona/SET_MORDIDA',
  SET_FRASE: 'comoFunciona/SET_FRASE',
  SET_TEMPO: 'comoFunciona/SET_TEMPO',
  SET_PESSOA: 'comoFunciona/SET_PESSOA',
  RESET: 'comoFunciona/RESET',
};

const initialState = {
  formulario: {} as IFormulario,
};

export type ComoFuncionaState = Readonly<typeof initialState>;

// Reducer

export default (state: ComoFuncionaState = initialState, action): ComoFuncionaState => {
  switch (action.type) {
    case ACTION_TYPES.SET_MOTIVACAO:
      return {
        ...state,
        formulario: {
          ...state.formulario,
          motivacao: action.payload,
        },
      };
    case ACTION_TYPES.SET_USOU_APARELHO:
      return {
        ...state,
        formulario: {
          ...state.formulario,
          usouAparelho: action.payload,
        },
      };
    case ACTION_TYPES.SET_ESPACAMENTO:
      return {
        ...state,
        formulario: {
          ...state.formulario,
          espacamento: action.payload,
        },
      };
    case ACTION_TYPES.SET_DESALINHAMENTO:
      return {
        ...state,
        formulario: {
          ...state.formulario,
          desalinhamento: action.payload,
        },
      };
    case ACTION_TYPES.SET_MORDIDA:
      return {
        ...state,
        formulario: {
          ...state.formulario,
          mordida: action.payload,
        },
      };
    case ACTION_TYPES.SET_FRASE:
      return {
        ...state,
        formulario: {
          ...state.formulario,
          frase: action.payload,
        },
      };
    case ACTION_TYPES.SET_TEMPO:
      return {
        ...state,
        formulario: {
          ...state.formulario,
          tempo: action.payload,
        },
      };
    case ACTION_TYPES.SET_PESSOA:
      return {
        ...state,
        formulario: {
          ...state.formulario,
          pessoa: {
            nome: action.payload.nome,
            email: action.payload.email,
            telefone: action.payload.telefone,
            cep: action.payload.cep,
            idade: action.payload.idade,
          },
        },
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

export const setMotivacao = (motivacao) => ({
  type: ACTION_TYPES.SET_MOTIVACAO,
  payload: motivacao,
});

export const setUsouAparelho = (usouAparelho) => ({
  type: ACTION_TYPES.SET_USOU_APARELHO,
  payload: usouAparelho,
});

export const setEspacamento = (espacamento) => ({
  type: ACTION_TYPES.SET_ESPACAMENTO,
  payload: espacamento,
});

export const setDesalinhamento = (desalinhamento) => ({
  type: ACTION_TYPES.SET_DESALINHAMENTO,
  payload: desalinhamento,
});

export const setMordida = (mordida) => ({
  type: ACTION_TYPES.SET_MORDIDA,
  payload: mordida,
});

export const setFrase = (frase) => ({
  type: ACTION_TYPES.SET_FRASE,
  payload: frase,
});

export const setTempo = (tempo) => ({
  type: ACTION_TYPES.SET_TEMPO,
  payload: tempo,
});

export const setPessoa = (pessoa: IPessoa) => ({
  type: ACTION_TYPES.SET_PESSOA,
  payload: pessoa,
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
