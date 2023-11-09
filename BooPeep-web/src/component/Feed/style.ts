// style.ts

import styled from '@emotion/styled';

export const FeedWrapper = styled.div`
  width: 100vw; /* Agora ocupa a largura total da tela */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo verticalmente */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
`;

export const TweetContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alterando para coluna para o texto afetar a altura */
  margin: 0.2vh  ;
  width: 50vw; /* Define uma largura máxima para evitar que o conteúdo fique muito largo */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* Estilize os ícones de "like" e "comentários" como desejar */
  .icon {
    margin-right: 10px;
    color: #333;
    cursor: pointer;
  }
  /* Estilize o ícone do comentário */
  .comment-icon {
    color: blue;
  }

  /* Estilize a área de comentários */
  .comment-area {
    display: none;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  /* Estilize a área de histórico de comentários */
  .comment-history {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 20px;
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
