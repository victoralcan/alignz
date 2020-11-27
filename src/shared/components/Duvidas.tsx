import React from 'react';
import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorPallet } from '../model/enum/colors';

interface IDuvidasState {
  collapseControl: boolean[];
}

class Duvidas extends React.Component<any, IDuvidasState> {
  constructor(props) {
    super(props);
    this.state = {
      collapseControl: [false, false, false, false],
    };
  }

  toggleDuvida = (index: number) => {
    const { collapseControl } = this.state;
    collapseControl.splice(index, 1, !collapseControl[index]);
    this.setState(() => {
      return {
        collapseControl,
      };
    });
  };

  render() {
    const { collapseControl } = this.state;
    return (
      <section className="infoContainerFlex d-flex flex-column p-4" style={{ backgroundColor: ColorPallet.pastelOpac }}>
        <h1 className="text-dark pb-5 mr-auto ml-auto">Dúvidas Frequentes</h1>
        <div className="mr-auto ml-auto w-50">
          <h4 onClick={() => this.toggleDuvida(0)} className="togglerDuvida pb-3">
            <FontAwesomeIcon icon={collapseControl[0] ? 'minus' : 'plus'} />
            &nbsp;&nbsp;
            <span className="font-weight-bold togglerDuvida">como funciona</span> o tratamento de aparelho invisível
            AlignerZ?
          </h4>
          <Collapse isOpen={collapseControl[0]} className="w-75 mr-auto ml-auto">
            <p>
              após digitalizar a sua boca, nossos ortodontistas planejam a movimentação dos seus dentes e você recebe
              uma sequência de alinhadores transparentes feitos sob medida. use cada fase de alinhadores por 2 semanas e
              volte para uma consulta de acompanhamento a cada 2 meses, até chegar no sorriso que você ama.
            </p>
          </Collapse>
          <h4 onClick={() => this.toggleDuvida(1)} className="togglerDuvida pb-3">
            <FontAwesomeIcon icon={collapseControl[1] ? 'minus' : 'plus'} />
            &nbsp;&nbsp;como eu sei se o tratamento de aparelho invisível AlignerZ&nbsp;
            <span className="font-weight-bold togglerDuvida">funciona para mim?</span>
          </h4>
          <Collapse isOpen={collapseControl[1]} className="w-75 mr-auto ml-auto">
            <p>
              o aparelho invisível AlignerZ é focado em casos estéticos, de alinhamento e espaçamento dos dentes, que
              podem durar entre 3 e 9 meses. a melhor forma de saber se funciona para você é agendando uma avaliação
              presencial em uma das nossas lojas. até lá, pode responder ao nosso teste online aqui!
            </p>
          </Collapse>
          <h4 onClick={() => this.toggleDuvida(2)} className="togglerDuvida pb-3">
            <FontAwesomeIcon icon={collapseControl[2] ? 'minus' : 'plus'} />
            &nbsp;&nbsp; como eu sei se funciona mesmo?
          </h4>
          <Collapse isOpen={collapseControl[2]} className="w-75 mr-auto ml-auto">
            <p>
              A tecnologia por trás dos aparelhos invisíveis já existe há mais de 20 anos e é clinicamente comprovada.
              Além disso, por conta do planejamento digital, podemos prever cada etapa do tratamento, o que deixa o
              resultado mais assertivo.
            </p>
          </Collapse>
          <h4 onClick={() => this.toggleDuvida(3)} className="togglerDuvida pb-3">
            <FontAwesomeIcon icon={collapseControl[3] ? 'minus' : 'plus'} />
            &nbsp;&nbsp; o tratamento de aparelho invisível AlignerZ substitui o aparelho fixo?
          </h4>
          <Collapse isOpen={collapseControl[3]} className="w-75 mr-auto ml-auto">
            <p>
              Nosso aparelho invisível substitui o aparelho fixo para casos estéticos, que podem durar entre 3 e 9
              meses. É um tratamento mais rápido, pois os alinhadores aplicam uma força mais exata nos dentes,
              direcionando melhor a movimentação.
            </p>
          </Collapse>
        </div>
      </section>
    );
  }
}

export default Duvidas;
