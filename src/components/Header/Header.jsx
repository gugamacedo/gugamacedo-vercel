import style from './Header.module.css'

export function Header() {
  return (
    <header className={style.header}>
      <img src="/stain.svg" alt="Stain" className={style.stain} />
      <div className={style.avatar}>
        <img src="/avatar_small.png" alt="Guga Macedo" />
        <h1>Guga Macedo</h1>
        <h2>Frontend Developer</h2>
      </div>

      <div className={style.links}>
        <li>
          <a href="https://github.com/gugamacedo" target="_blank" rel="noreferrer">
            <img src="/github.svg" alt="Github Profile" />
            <h4>Github</h4>
          </a>
        </li>

        <li>
          <a href="https://linkedin.com/in/gugamacedo" target="_blank" rel="noreferrer">
            <img src="./linkedin.svg" alt="Linkedin Profile" />
            <h4>Linkedin</h4>
          </a>
        </li>
      </div>
    </header>
  )
}
