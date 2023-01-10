import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import styles from './Comment.module.css'

type CommentType = {
  content : string;
  onDeleteComment : (comment: string) => void;
}
export function Comment ({content, onDeleteComment}:CommentType) {
  
  const [likeCount , setLikeCount] = useState(0);

  function handleDeleteComment () {
      onDeleteComment(content);
      
  }
  function handleLikeComment(){
    setLikeCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/67121891?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Emanuel</strong>
              
              <time title="06 de janeiro às 10:24h" dateTime="2023-01-06 10:24:11">Cerca de 1h atrás</time> 
            </div>
            
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}