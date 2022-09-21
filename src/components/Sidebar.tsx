import { Avatar } from './Avatar'

import { PencilSimpleLine } from 'phosphor-react'

import coverImg from '../assets/images/hobbit.jpg'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverImg} />

      <div className={styles.profile}>
        <Avatar hasBorder src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuE2gcLbyQCAClJVDfmQlP9pygX49wQppCFul57ULA8HDMEPGJjsZ4Avj2KUOqBUM-v8c&usqp=CAU' />

        <strong>
          Gabrell
        </strong>
        <span>
         Front End Student
        </span>
      </div>

      <footer className={styles.footer}>
        <a className={styles.button} href="#">
        <PencilSimpleLine size={20} />

        Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}