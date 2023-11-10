import styled from 'styled-components';
 
export const FeedWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
 
export const TweetContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.2vh;
  width: 50vw;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 
  .icon {
    margin-right: 10px;
    color: #333;
    cursor: pointer;
  }
 
  .comment-icon {
    color: black;
  }
 
  .comment-area {
    display: none;
    margin-top: 10px;
    // padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
 
  .comment-history {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
 
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
 
export const TweetContent = styled.div`
  flex: 1;
`;
 
export const UserName = styled.h2`
  font-size: 16px;
  margin: 0;
  color: #333;
`;
 
export const TweetText = styled.p`
  font-size: 14px;
  margin: 5px 0;
  color: #666;
`;
 export const Icone = styled.p`
 .icon {
  color: #000; /* Cor padrão do ícone */
  transition: color 0.3s ease; /* Adiciona uma transição suave na mudança de cor */
}

.icon.clicked {
  color: #ff0000; /* Cor vermelha ao ser clicado */
  animation: heartBeat 0.8s; /* Adiciona uma animação ao ícone */
}

@keyframes heartBeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
 `

 export const Coment = styled.p`
 .comment-area {
  background-color: #ffffff; /* Cor de fundo branca */
  border: 1px solid #ccc; /* Borda acinzentada */
  border-radius: 8px; /* Borda arredondada */
  padding: 10px;
  margin-top: 10px;
}

.comment-history {
  margin-bottom: 10px;
}

.comment-input-container {
  display: flex;
  align-items: center;
}

.comment-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc; /* Borda acinzentada */
  border-radius: 4px; /* Borda arredondada */
  resize: vertical; /* Permitir redimensionamento vertical */
  margin-right: 8px;
}

.send-button {
  background-color: #007bff; /* Cor de fundo azul, ajuste conforme necessário */
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
}

.send-button img {
  width: 20px;
  height: 20px;
}
 `

 export const Botao = styled.p`

 // Adicione essas regras de estilo ao seu arquivo CSS

 .send-button {
   position: fixed;
   top: 50%; /* Posiciona o botão no centro verticalmente */ /* Fixa o botão no lado esquerdo da tela */
   left: 0;
   display: flex;
   align-items: center; /* Centraliza verticalmente */
   z-index: 999; /* Define a ordem de empilhamento para garantir que fique acima de outros elementos */
  //  background-color: #007bff; /* Cor de fundo azul, ajuste conforme necessário */
   border: none;
   padding: 8px;
   border-radius: 4px;
   cursor: pointer;
   transition: transform 0.3s ease; /* Adiciona uma transição suave na transformação */
 }
 
 .send-button.clicked {
   transform: translateY(-50%) rotate(90deg); /* Gira 90 graus ao ser clicado */
 }
 
 .send-button img {
   margin-right: 8px; /* Adiciona um espaço entre a imagem e o texto */
 }
 
`