export default interface IFormulario {
  motivacao: string;
  usouAparelho: string;
  espacamento: string;
  desalinhamento: string;
  mordida: string;
  frase: string;
  tempo: string;
  pessoa: IPessoa;
}

export interface IPessoa {
  nome: string;
  email: string;
  telefone: string;
  cep: string;
  idade: string;
}

export const defaultValue: Readonly<IFormulario> = {
  motivacao: null,
  usouAparelho: null,
  espacamento: null,
  desalinhamento: null,
  mordida: null,
  frase: null,
  tempo: null,
  pessoa: null,
};
