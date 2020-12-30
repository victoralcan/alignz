import { combineReducers } from 'redux';
import preavaliacao, { PreAvaliacaoState } from 'pages/preavaliacao/preavaliacao.reducer';

export interface IRootState {
  readonly preavaliacao: PreAvaliacaoState;
}

const rootReducer = combineReducers<IRootState>({ preavaliacao });

export default rootReducer;
