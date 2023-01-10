import styles from './Header.module.css';

import IgniteLogo from '../../assets/IgniteLogo.svg';

export function Header(){
  return(
    <>
    <div 
     className={styles.header}
    >
      <img src={IgniteLogo} alt="LogoTipo" />
    </div>
    </>
  )
}