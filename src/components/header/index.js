import React from "react"
import CanvaLogo from "../canva-logo"
import Navigation from "../navigation"
import Actions from "../actions"
import style from "./index.css"

const Header = () => (
  <header className={style.header}>
    <CanvaLogo />
    <Navigation />
    <Actions />
  </header>
)

export default Header
