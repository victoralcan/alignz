import IFormulario, { IPessoa } from 'shared/model/formulario.model';
import { AxiosPromise } from "axios";

export const ACTION_TYPES = {
  SET_MOTIVACAO: 'preavaliacao/SET_MOTIVACAO',
  SET_USOU_APARELHO: 'preavaliacao/SET_USOU_APARELHO',
  SET_ESPACAMENTO: 'preavaliacao/SET_ESPACAMENTO',
  SET_DESALINHAMENTO: 'preavaliacao/SET_DESALINHAMENTO',
  SET_MORDIDA: 'preavaliacao/SET_MORDIDA',
  SET_FRASE: 'preavaliacao/SET_FRASE',
  SET_TEMPO: 'preavaliacao/SET_TEMPO',
  SET_PESSOA: 'preavaliacao/SET_PESSOA',
  SEND_EMAIL: 'preavaliacao/SEND_EMAIL',
  ENVIANDO: 'preavaliacao/ENVIANDO',
  ENVIO_SUCESSO: 'preavaliacao/ENVIO_SUCESSO',
  ENVIO_FALHOU: 'preavaliacao/ENVIO_FALHOU',
  RESET: 'preavaliacao/RESET',
};

export interface IPayload<T> {
  type: string;
  payload: AxiosPromise<T>;
}
export type IPayloadResult<T> = ((dispatch: any) => IPayload<T> | Promise<IPayload<T>>);

const initialState = {
  formulario: {} as IFormulario,
  enviando: false,
  enviado: false,
  falhou: false
};

export type PreAvaliacaoState = Readonly<typeof initialState>;

// Reducer

export default (state: PreAvaliacaoState = initialState, action): PreAvaliacaoState => {
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
    case ACTION_TYPES.ENVIANDO:
      return {
        ...state,
        enviando: true
      };
    case ACTION_TYPES.ENVIO_SUCESSO:
      return {
        ...state,
        enviado: true,
        enviando: false
      };
    case ACTION_TYPES.ENVIO_FALHOU:
      return {
        ...state,
        falhou: true,
        enviando: false
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

export const sendEmail = (formulario: IFormulario) => async dispatch => {
  const { frase, mordida, desalinhamento, espacamento, usouAparelho, motivacao, pessoa, tempo } = formulario;
  dispatch(setEnviando())
  return await dispatch({
    type: ACTION_TYPES.SEND_EMAIL,
    // @ts-ignore
    payload: window.emailjs
      .send(
        'default_service',
        'template_qayttcv',
        {
          ...pessoa,
          frase,
          mordida,
          desalinhamento,
          espacamento,
          usouAparelho,
          motivacao,
          tempo
        },
        'user_MZIRASYGB78T7Afd6BXYJ'
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(setSuccess())
        }
      })
      .catch(() => dispatch(setFalhou()))
  });
};

export const setFalhou = () => ({
  type: ACTION_TYPES.ENVIO_FALHOU,
});

export const setEnviando = () => ({
  type: ACTION_TYPES.ENVIANDO,
});

export const setSuccess = () => ({
  type: ACTION_TYPES.ENVIO_SUCESSO,
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
