import { Comment } from '../Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { ChangeEvent, InvalidEvent, useState } from 'react';

type PostType = {
  author : {
    name: string;
    avatarUrl: string;
    role : string;
  },
  content : [
    line : {
      type : 'paragraph' | 'link',
      content : String,
    }
  ]
  publishedAt : Date;
}

export function Post ({author, publishedAt, content}:PostType) {
  
  const [comments, setComments] = useState(['Post showww!'])
  const [newCommentText, setCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale : ptBR
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale : ptBR,
    addSuffix: true
  });

  function handleCreateNewComment (e: HTMLFormElement) {
    e.preventDefault();
   
    setComments([...comments, newCommentText])
    setCommentText('')
  }
  function handleNewCommentChange(e: ChangeEvent<HTMLFormElement>){
    e.target.setCustomValidity('');
    setCommentText(e.target.value);
  }
  function handleNewCommentInvalid(e: InvalidEvent<HTMLFormElement>){
    e.target.setCustomValidity("Esse campo é obrigatório")
  }
  function deleteComment(commentToDelete : string){
    const commentsWithoutDeleteOne = comments.filter(comment => {
       return comment !== commentToDelete
    })
       setComments(commentsWithoutDeleteOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
         <img 
          className={styles.author}
          src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>
             {author.name}
            </strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateRelativeToNow} dateTime={publishedAt.toISOString()}>
          {publishedDateFormatted}
        </time>
      </header>
      <div className={styles.content}>
        {
          content.map(line => {
            if(line.type === 'paragraph'){
              return <p key={line.content}>{line.content}</p>
            }else if (line.type === 'link'){
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm} onDeleteComment={deleteComment}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        name="comment"
        value={newCommentText}
        onChange={handleNewCommentChange}
        placeholder='Deixe um comentário'
        onInvalid={handleNewCommentInvalid}
        required
        />
       
       <footer>
        <button 
            type='submit'
            disabled={newCommentText.length === 0}
        >
          Publicar
          </button>
       </footer>
      </form>
      
      <div className={styles.commentList}>
      {comments.map(comment => {
        return <Comment key={comment} content={comment}/>
      })}
      </div>

    </article>
  )
}