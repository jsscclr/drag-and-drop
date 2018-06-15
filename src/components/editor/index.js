import React from "react"
import { DragDropContext } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"
import CustomDragLayer from "../custom-drag-layer"
import style from "./index.css"

const Editor = ({ children }) => (
  <div className={style.editor}>
    {children}
    <CustomDragLayer />
  </div>
)

export default DragDropContext(HTML5Backend)(Editor)
