import React from "react";
import "./index.less";

export default function EntendenDom() {
  return (
    <div className="dom">
      <h1 className="dom_subtitulo">DOM & Virtual DOM</h1>
      <li className="dom_descricao">
        "Dom" é a sigla para Document Object Model ou em português (Objeto
        Modelo de Documento), que é uma representação em árvore de todos os
        elementos em uma página web. É uma interface de programação (API) para
        documentos HTML e XML, que permite que programadores manipulem o
        conteúdo, estrutura e estilo de uma página através de código JavaScript.
      </li>
      <li className="dom_descricao">
        Já o "Virtual DOM" é uma abstração do DOM real, usada por bibliotecas de
        JavaScript como React para tornar mais fácil e eficiente a manipulação
        do DOM. Em vez de atualizar o DOM diretamente, a biblioteca React mantém
        uma representação em memória do Virtual DOM e compara a representação
        atual com a anterior para determinar as mudanças necessárias. Em
        seguida, atualiza o DOM real com o menor número possível de mudanças, o
        que torna a atualização da página mais rápida e eficiente em termos de
        recursos. através de código JavaScript.
      </li>
    </div>
  );
}
