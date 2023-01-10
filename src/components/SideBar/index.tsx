import  styles from "./SideBar.module.css"
import { PencilLine } from 'phosphor-react';

export function SideBar(){
  return(
    <>
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
        src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
      />

      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/67121891?v=4" />
        <strong>Vitor Emanuel</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="/">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
    </>
  )
}