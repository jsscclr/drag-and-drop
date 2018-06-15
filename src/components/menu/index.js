import React from "react"
import classnames from "classnames"
import { ElementsIcon, LayoutIcon, TextIcon, UpArrowIcon } from "../icons"
import style from "./index.css"

const Menu = ({ items }) => (
  <ul className={style.menu}>
    {items.map(({ active, icon: Icon, text }) => (
      <li
        className={classnames(style.menuItem, { [style.active]: active })}
        key={text}
      >
        <Icon />
        {text}
      </li>
    ))}
  </ul>
)

Menu.defaultProps = {
  items: [
    {
      icon: LayoutIcon,
      text: "Templates",
    },
    {
      icon: ElementsIcon,
      text: "Library",
      active: true,
    },
    {
      icon: TextIcon,
      text: "Text",
    },
    {
      icon: UpArrowIcon,
      text: "Uploads",
    },
  ],
}

export default Menu
