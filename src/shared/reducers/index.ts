import { combineReducers } from 'redux';
import comoFunciona, { ComoFuncionaState } from 'pages/comoFunciona/comoFunciona.reducer';

export interface IRootState {
  readonly comoFunciona: ComoFuncionaState;
}

const rootReducer = combineReducers<IRootState>({ comoFunciona });

export default rootReducer;
