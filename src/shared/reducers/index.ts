import { combineReducers } from 'redux';
import preavaliacao, { PreAvaliacaoState } from 'pages/preavaliacao/preavaliacao.reducer';
import header, { HeaderState } from 'shared/components/header/header.reducer';
import footer, { FooterState } from 'shared/components/footer/footer.reducer';

export interface IRootState {
  readonly preavaliacao: PreAvaliacaoState;
  readonly header: HeaderState;
  readonly footer: FooterState;
}

const rootReducer = combineReducers<IRootState>({ preavaliacao, header, footer });

export default rootReducer;
