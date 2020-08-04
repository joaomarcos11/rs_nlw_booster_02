import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/54403676?s=460&u=295a01ef20c75c020ef727e683e80fb537d7eefa&v=4" alt="Joao Marcos"/>
        <div>
          <strong>João Marcos</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/> <br/>
        Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 1000 pessoas já passaram por minhas experiências.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;