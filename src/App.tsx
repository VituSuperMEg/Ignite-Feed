import { Post } from "./components/Post/index";
import './global.css';
import styles from './App.module.css';
import { Header } from "./components/Header";
import { SideBar } from './components/SideBar'

const posts = [
  {
    id : 1,
    author : {
      avatarUrl : 'https://avatars.githubusercontent.com/u/67121891?v=4',
      name : 'Vitor Emanuel',
      role : 'Itarget',
    },
    content : [
      {type : 'paragraph', content : 'Fala galera 👋'},
      {type : 'paragraph', content :'Acabei de subir um projeto pro meu gthub. É um projeto muito top, quem quiser da uma olhada  ai'},
      {type : 'link', content : 'vitor.dev/epfam'},
    ],
    publishedAt  : new Date('2023-01-10 06:55:55')
  },
  {
  id : 2,
    author : {
      avatarUrl : 'https://avatars.githubusercontent.com/u/48180873?v=4',
      name : 'Emeson Oliveira Borges',
      role : 'Desenvolvedor Delphin',
    },
    content : [
      {type : 'paragraph', content : 'Fala galera 👋'},
      {type : 'paragraph', content :'Acabei de subir um projeto pro meu gthub. É um projeto muito top, quem quiser da uma olhada  ai'},
      {type : 'link', content : 'emeson.dev/bibliodesk'},
    ],
    publishedAt  : new Date('2023-01-10 06:55:55')
  }
]
export default function App() {
 
  return (
    <>
    <Header />

    <div className={styles.wrapper}>
      <SideBar />
      <main>
        {
          posts.map(post => {
            return(
              <Post
               key={post.id}
               author={post.author}
               content={post.content}
               publishedAt={post.publishedAt}
               />
            )
          })
        }
      </main>
    </div>
    </>
  )
}

