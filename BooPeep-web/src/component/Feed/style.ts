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
    color: blue;
  }
 
  .comment-area {
    display: none;
    margin-top: 10px;
    padding: 10px;
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
 