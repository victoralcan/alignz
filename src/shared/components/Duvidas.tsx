import React from 'react';
import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IDuvidasState {
  collapseControl: boolean[];
}

interface IDuvidasProps {
  title?: string;
}

class Duvidas extends React.Component<IDuvidasProps, IDuvidasState> {
  constructor(props) {
    super(props);
    this.state = {
      collapseControl: [false, false, false, false, false],
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
    const { title } = this.props;
    return (
      <section className="infoContainerFlex d-flex flex-column p-4">
        <h1 className="pb-5 mr-auto ml-auto">{title ? title : 'Dúvidas Frequentes'}</h1>
        <div className="mr-auto ml-auto w-50">
          <h4 onClick={() => this.toggleDuvida(0)} className="pb-3">
            <FontAwesomeIcon icon={collapseControl[0] ? 'minus' : 'plus'} />
            &nbsp;&nbsp;O que são os alinhadores alignerZ?
          </h4>
          <hr />
          <Collapse isOpen={collapseControl[0]} className="w-75 mr-auto ml-auto">
            <p>
              São o que chamamos de terapia de alinhamento. Nela, são inclusos vários conjuntos de plaquinhas, feitas de
              plástico transparente sem BPA ajustadas, personalizadas, que mudam gradualmente os dentes para a posição
              que eles deveriam estar.
            </p>
            <br />
          </Collapse>
          <h4 onClick={() => this.toggleDuvida(1)} className="pb-3">
            <FontAwesomeIcon icon={collapseControl[1] ? 'minus' : 'plus'} />
            &nbsp;&nbsp;Quanto tempo os alinhadores alignerZ levam para endireitar o meu sorriso?
          </h4>
          <hr />
          <Collapse isOpen={collapseControl[1]} className="w-75 mr-auto ml-auto">
            <p>
              O dentista ou ortodontista designado a você determinará o melhor plano para suas necessidades, mas
              corrigimos a maioria dos sorrisos em uma média de 6 meses ou menos!
            </p>
            <br />
          </Collapse>
          <h4 onClick={() => this.toggleDuvida(2)} className="pb-3">
            <FontAwesomeIcon icon={collapseControl[2] ? 'minus' : 'plus'} />
            &nbsp;&nbsp;Como eu sei qual o melhor tratamento ortodôntico para mim?
          </h4>
          <hr />
          <Collapse isOpen={collapseControl[2]} className="w-75 mr-auto ml-auto">
            <p>
              O dentista ou ortodontista designado determinará qual plano de tratamento é o melhor pra você. Nossos
              alinhadores te ajudam a conseguir um sorriso que você vai adorar em menos de 6 meses. Eles são mais
              rápidos e convenientes para os clientes que desejam completar seu novo sorriso a tempo para um evento
              especial - como fotos de formatura, casamento ou eventos de trabalho.
            </p>
            <br />
          </Collapse>
          <h4 onClick={() => this.toggleDuvida(3)} className="pb-3">
            <FontAwesomeIcon icon={collapseControl[3] ? 'minus' : 'plus'} />
            &nbsp;&nbsp;Eu consigo ver como o meu sorriso ficará após o tratamento antes de tomar uma decisão?
          </h4>
          <hr />
          <Collapse isOpen={collapseControl[3]} className="w-75 mr-auto ml-auto">
            <p>
              Sim, depois de recebermos sua imagem 3D, criamos um plano de tratamento personalizado que mostra uma
              visualização 3D de antes e depois de como seus dentes se moverão com o tratamento.
            </p>
            <br />
          </Collapse>
          <h4 onClick={() => this.toggleDuvida(4)} className="pb-3">
            <FontAwesomeIcon icon={collapseControl[4] ? 'minus' : 'plus'} />
            &nbsp;&nbsp;Como funciona o tratamento com os alinhadores alignerZ?
          </h4>
          <hr />
          <Collapse isOpen={collapseControl[4]} className="w-75 mr-auto ml-auto">
            <p>
              Cada alinhador faz pequenos ajustes na posição do dente, e esse processo é mapeado com antecedência por um
              dentista ou ortodontista Aligner Z, que analisa o seu caso. Você começará a usar um novo conjunto de
              alinhadores conforme prescrito, avançando para o próximo estágio do seu novo sorriso.
            </p>
            <br />
          </Collapse>
          <h4 onClick={() => this.toggleDuvida(5)} className="pb-3">
            <FontAwesomeIcon icon={collapseControl[5] ? 'minus' : 'plus'} />
            &nbsp;&nbsp;Meus dentes vão doer enquanto eu estiver fazendo o uso dos alinhadores alignerZ?
          </h4>
          <hr />
          <Collapse isOpen={collapseControl[5]} className="w-75 mr-auto ml-auto">
            <p>
              A maioria das pessoas sente alguma dor nos dentes por alguns dias depois de usar os alinhadores. E isso é
              perfeitamente normal. É um sinal de que seus alinhadores estão trabalhando, movendo suavemente os dentes
              até o destino final. Esta dor deve desaparecer gradualmente após os primeiros dias de uso. É muito
              parecido com um bom treino na academia, dói um pouco alguns dias depois.
            </p>
            <br />
          </Collapse>
          <h4 onClick={() => this.toggleDuvida(6)} className="pb-3">
            <FontAwesomeIcon icon={collapseControl[6] ? 'minus' : 'plus'} />
            &nbsp;&nbsp;O que faço se os meus dentes não estão alinhando como o esperado?
          </h4>
          <hr />
          <Collapse isOpen={collapseControl[6]} className="w-75 mr-auto ml-auto">
            <p>
              Às vezes, podem ser necessárias atualizações em seu plano. Você pode precisar de um ajuste no final do
              tratamento que consiste em conjuntos extras de alinhadores. Se, no meio do seu tratamento, seus dentes não
              estiverem seguindo o planejado, podemos precisar de um novo escaneamento e continuar o tratamento de
              acordo com o novo ponto de partida. Se você notar que algo não está certo a qualquer momento, entre em
              contato conosco.
            </p>
          </Collapse>
        </div>
      </section>
    );
  }
}

export default Duvidas;
