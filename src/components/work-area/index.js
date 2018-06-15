import React from "react"
import Toolbar from "../toolbar"
import Canvas from "../canvas"
import style from "./index.css"

const WorkArea = () => (
  <div>
    <Toolbar />
    <div className={style.workArea}>
      <Canvas />
    </div>
  </div>
)

export default WorkArea
