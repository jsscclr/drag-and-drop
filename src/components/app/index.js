import React, { Fragment } from "react"
import style from "./index.css"
import Header from "../header"
import Menu from "../menu"
import Panel from "../panel"
import Editor from "../editor"
import WorkArea from "../work-area"

const App = () => (
  <Fragment>
    <Header />
    <Editor>
      <Menu />
      <Panel />
      <WorkArea />
    </Editor>
  </Fragment>
)

export default App
