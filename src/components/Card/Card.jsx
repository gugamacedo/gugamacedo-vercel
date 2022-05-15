import style from './Card.module.css'

import data from "../../data.json"

const parse = require('html-react-parser')

export function Card() {

  return (
    <main className={style.main}>
      <ul className={style.cards}>
        {
          data.map(item => (
            <li className={style.card} key={item.title}>
            <h3>{item.title}</h3>
            <a href={item.link} target="_blank" rel="noreferrer">
              <img src={item.image} alt={item.title} />
            </a>
            <div>
              <p>
                <b>About:</b> {item.about}
              </p>
              <p className='made'>
                <b>Made with: </b>
                {parse(item.made)}
              </p>
            </div>
          </li>
          ))
        }

      </ul>
    </main>
  )
}
