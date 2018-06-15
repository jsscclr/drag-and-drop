import React from "react"
import classnames from "classnames"
import style from "./index.css"

const Button = ({ text, type }) => (
  <button className={classnames(style.button, style[type])}>{text}</button>
)

export default Button
