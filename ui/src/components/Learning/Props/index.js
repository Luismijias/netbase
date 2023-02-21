import React from "react";
import "./index.less";
import { Col, Divider, Row } from "antd";

export default function ComponenteFuncaoExemploProps(props) {
  return (
    <div className="props">
      <h1 className="props_subtitulo">Props</h1>
      <li className="props_descricao">
        Propriedades,properties ou resumidamente "Props", são
        informações que podem ser passadas para um componente. Pode ser uma
        string, um número, até mesmo uma função. Um dado importante é que esse valor pode ser
        utilizado pelo próprio componente que a recebe. Primeiro, passamos o dado que
        desejamos passar ao componente definindo-o como um ATRIBUTO, onde o
        componente é utilizado.Tornando esse componente dinâmico que recebe as
        propriedades do elemento pai.
      </li>

      <h1 className="props_subtitulo">Exercício:</h1>
      <p className="props_explanando">
        Neste exercício você terá que ultilizar props para expor atributos na
        área de trabalho do Netuno como está explicado no vídeo 2.E como foi
        feito aqui na parte das referências.
      </p>
      <p className="props_explanando">
        Ultilize mais vídeos explicativos se for necessário.Só para ficar mais
        claro.
        </p>
        <p className="props_explanando">
          Aqui foi feito o exemplo com os componentes Learning e
          ComponenteFuncaoExemploProps. Onde "Learning" é o componente pai que
          passa os links dos vídeos para o componente filho, que no caso é
          "ComponenteFuncaoExemploProps".
        </p>
        <h3>Referências & exemplo de exercício:</h3>
      <Row className="props_section" gutter={16}>
        <Col span={24}>
          <p className="props_assunto">Assunto:{props.assunto}</p>
        </Col>
        <Col span={24}>Vídeo explicativo:
          <button className="props_button">
            <a href={props.video1}>Click para ver o vídeo explicativo 1</a>
          </button>
        </Col>
        <Col span={24}>Vídeo do exercício:
          <button className="props_button">
            <a href={props.video2}>Click para ver o vídeo explicativo 2</a>
          </button>
        </Col>
        <Col span={24}>Vídeo Complementar:
          <button className="props_button">
            <a href={props.video3}>Click para ver o vídeo explicativo 3</a>
          </button>
        </Col>
        <Col span={24}>Explanação teórica:
          <button className="props_button">
            <a href={props.teoria}>Click para ver explicação teorica</a>
          </button>
        </Col>
      </Row>
    
    </div>
  );
}

// Referências:
// https://felipegalvao.com.br/pt/blog/learn-react-components-state-and-props/
// https://youtu.be/TlD49IAEPmc
