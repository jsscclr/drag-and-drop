import React from "react"
import style from "./index.css"

const Navigation = ({ items }) => (
  <ul className={style.navigation}>
    {items.map(item => (
      <li className={style.navigationItem} key={item}>
        {item}
      </li>
    ))}
  </ul>
)

Navigation.defaultProps = {
  items: ["File", "Edit", "Help"],
}

export default Navigation
