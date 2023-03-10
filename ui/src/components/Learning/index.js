import React from "react";
import "./index.less";
import ComponenteFuncaoExemploProps from "./Props";
import Title from "antd/lib/typography/Title";
import Variáveis from "./VariaveisGlobais";
import EntendenDom from "./Dom";


export default function Learning() {
  return (
    <div className="learning">
      <Title className="learning_title">{Variáveis.tituloprincipal}</Title>
    
      <ComponenteFuncaoExemploProps
        assunto={Variáveis.propsast}
        video1={Variáveis.propsv1}
        video2={Variáveis.propsv2}
        video3={Variáveis.propsv3}
        teoria={Variáveis.propsteo}
      />
    </div>
  );
}
